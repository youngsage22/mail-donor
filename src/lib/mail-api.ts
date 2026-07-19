const BASE_URL = 'https://api.mail.tm';

export interface Domain {
  id: string;
  domain: string;
  isActive: boolean;
}

export async function fetchDomains(): Promise<Domain[]> {
  const res = await fetch(`${BASE_URL}/domains`);
  if (!res.ok) throw new Error('Failed to fetch domains');
  const data = await res.json();
  return data['hydra:member'];
}

export async function createAccount(address: string, password: string) {
  const res = await fetch(`${BASE_URL}/accounts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ address, password })
  });
  if (!res.ok) throw new Error('Failed to create account');
  return res.json();
}

export async function getToken(address: string, password: string) {
  const res = await fetch(`${BASE_URL}/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ address, password })
  });
  if (!res.ok) throw new Error('Failed to get token');
  return res.json();
}

export async function fetchMessages(token: string) {
  const res = await fetch(`${BASE_URL}/messages`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!res.ok) {
    if (res.status === 401) throw new Error('Unauthorized');
    throw new Error('Failed to fetch messages');
  }
  const data = await res.json();
  return data['hydra:member'];
}

export async function getMessage(id: string, token: string) {
  const res = await fetch(`${BASE_URL}/messages/${id}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!res.ok) throw new Error('Failed to fetch message');
  return res.json();
}

export async function deleteMessage(id: string, token: string) {
  const res = await fetch(`${BASE_URL}/messages/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!res.ok) throw new Error('Failed to delete message');
  return true;
}