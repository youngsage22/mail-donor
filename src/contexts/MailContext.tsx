import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '../lib/mail-api';

const SESSION_KEY = 'maildonor_session';

type Session = {
  id: string;
  address: string;
  token: string;
  password?: string;
  createdAt: number;
  domain: string;
};

const MailContext = createContext<any>(null);

export function MailProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isSessionLoading, setIsSessionLoading] = useState(true);
  const queryClient = useQueryClient();

  useEffect(() => {
    try {
      const stored = localStorage.getItem(SESSION_KEY);
      if (stored) {
        setSession(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to restore session', e);
    }
    setIsSessionLoading(false);
  }, []);

  const saveSession = useCallback((newSession: Session) => {
    localStorage.setItem(SESSION_KEY, JSON.stringify(newSession));
    setSession(newSession);
  }, []);

  const clearSession = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    setSession(null);
  }, []);

  const domainsQuery = useQuery({
    queryKey: ['domains'],
    queryFn: api.fetchDomains,
    staleTime: 1000 * 60 * 60, // 1 hour cache
  });

  const generateAccountMutation = useMutation({
    mutationFn: async (domainString?: string) => {
      const domains = domainsQuery.data;
      if (!domains || domains.length === 0) throw new Error('No domains available');
      
      const domain = domainString || domains[0].domain;
      const localPart = Math.random().toString(36).substring(2, 10);
      const address = `${localPart}@${domain}`;
      const password = Math.random().toString(36).substring(2, 14);

      await api.createAccount(address, password);
      const { token, id } = await api.getToken(address, password);
      
      const newSession = { address, password, token, id, domain, createdAt: Date.now() };
      saveSession(newSession);
      return newSession;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] });
    }
  });

  const initAttempted = useRef(false);
  useEffect(() => {
    if (!isSessionLoading && !session && domainsQuery.data && !generateAccountMutation.isPending && !initAttempted.current) {
      initAttempted.current = true;
      generateAccountMutation.mutate();
    }
  }, [isSessionLoading, session, domainsQuery.data, generateAccountMutation]);

  const messagesQuery = useQuery({
    queryKey: ['messages', session?.id],
    queryFn: () => {
      if (!session?.token) throw new Error('No token');
      return api.fetchMessages(session.token);
    },
    enabled: !!session?.token,
    refetchInterval: 5000,
    retry: (failureCount, error: any) => {
      if (error.message === 'Unauthorized') {
        clearSession();
        initAttempted.current = false; // allow re-init
        return false;
      }
      return failureCount < 3;
    }
  });

  const deleteMessageMutation = useMutation({
    mutationFn: (id: string) => api.deleteMessage(id, session!.token),
    onSuccess: (_, id) => {
      queryClient.setQueryData(['messages', session?.id], (old: any) => 
        old ? old.filter((m: any) => m.id !== id) : old
      );
    }
  });

  const value = {
    session,
    isReady: !!session && !isSessionLoading,
    domains: domainsQuery.data || [],
    generateAccount: generateAccountMutation.mutateAsync,
    isGenerating: generateAccountMutation.isPending,
    messages: messagesQuery.data || [],
    isLoadingMessages: messagesQuery.isLoading,
    deleteMessage: deleteMessageMutation.mutateAsync,
    isDeleting: deleteMessageMutation.isPending,
    clearSession
  };

  return <MailContext.Provider value={value}>{children}</MailContext.Provider>;
}

export function useMail() {
  const context = useContext(MailContext);
  if (!context) throw new Error('useMail must be used within MailProvider');
  return context;
}

export function useMessage(id: string | null) {
  const { session } = useMail();
  return useQuery({
    queryKey: ['message', id],
    queryFn: () => {
      if (!id || !session?.token) throw new Error('Missing id or token');
      return api.getMessage(id, session.token);
    },
    enabled: !!id && !!session?.token,
  });
}