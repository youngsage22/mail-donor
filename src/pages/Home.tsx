import React, { useState } from 'react';
import { useMail, useMessage } from '@/contexts/MailContext';
import { Button } from '@/components/ui/button';
import { Copy, RefreshCw, Trash2, Mail as MailIcon, Clock, ChevronDown, CheckCircle2, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { formatDistanceToNow, format } from 'date-fns';

export default function Home() {
  const { session, isReady, domains, generateAccount, isGenerating, messages, isLoadingMessages, deleteMessage } = useMail();
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);

  if (!isReady) {
    return (
      <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-background text-foreground gap-4">
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 border-t-2 border-primary rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-r-2 border-accent rounded-full animate-spin-reverse"></div>
        </div>
        <p className="text-primary font-mono tracking-widest uppercase animate-pulse">Initializing Interface...</p>
      </div>
    );
  }

  const handleCopy = () => {
    if (session?.address) {
      navigator.clipboard.writeText(session.address);
      toast.success('Address copied to clipboard', {
        icon: <CheckCircle2 className="w-4 h-4 text-primary" />
      });
    }
  };

  const handleGenerate = async (domain?: string) => {
    setSelectedMessageId(null);
    const promise = generateAccount(domain);
    toast.promise(promise, {
      loading: 'Generating new identity...',
      success: 'New inbox ready!',
      error: 'Failed to generate address'
    });
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground selection:bg-primary/30 font-sans">
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center border border-primary/50 shadow-[0_0_15px_-3px_var(--color-primary)]">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <h1 className="font-serif font-bold text-xl tracking-wide bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">MAIL DONOR</h1>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="font-mono">
              Active {session?.createdAt ? formatDistanceToNow(session.createdAt) : '0m'}
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full p-4 flex flex-col gap-6 md:gap-8 pt-8">
        
        {/* HERO SECTION */}
        <div className="relative group rounded-3xl p-[1px] overflow-hidden bg-gradient-to-b from-primary/50 via-accent/30 to-secondary/20 transition-all hover:from-primary/70 shadow-2xl">
          <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="bg-card/95 backdrop-blur-xl p-8 md:p-12 rounded-3xl relative flex flex-col items-center text-center gap-6 border border-border/50">
            <h2 className="text-primary font-mono text-sm tracking-[0.2em] uppercase font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_var(--color-primary)]"></span>
              Live Connection Established
            </h2>
            
            <div className="flex flex-col md:flex-row items-center gap-4 relative">
              <div className="text-3xl md:text-5xl font-bold font-mono tracking-tight break-all select-all hover:text-primary transition-colors cursor-text">
                {session?.address}
              </div>
              <Button onClick={handleCopy} variant="neon" size="icon" className="shrink-0 rounded-xl hidden md:flex" title="Copy Address">
                <Copy className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-lg mt-4">
               <Button onClick={handleCopy} variant="outline" className="md:hidden flex-1 border-primary/30 hover:border-primary">
                <Copy className="w-4 h-4 mr-2" /> Copy
              </Button>
              <div className="relative flex-1 min-w-[200px]">
                <select 
                  className="w-full h-11 px-4 appearance-none bg-background border border-border rounded-xl font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all hover:border-primary/50"
                  value={session?.domain || ''}
                  onChange={(e) => handleGenerate(e.target.value)}
                  disabled={isGenerating}
                >
                  {domains.map((d: any) => (
                    <option key={d.id} value={d.domain}>@{d.domain}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
              
              <Button 
                onClick={() => handleGenerate()} 
                disabled={isGenerating}
                className="w-full md:w-auto bg-white text-black hover:bg-white/90 shadow-[0_0_20px_-5px_rgba(255,255,255,0.8)] font-bold text-base h-11 px-8 rounded-xl"
              >
                <RefreshCw className={cn("w-5 h-5 mr-2", isGenerating && "animate-spin")} />
                Regenerate
              </Button>
            </div>
          </div>
        </div>

        {/* INBOX SPLIT VIEW */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 min-h-[500px]">
          
          {/* MESSAGES LIST */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col border border-border/50 rounded-2xl bg-card overflow-hidden shadow-xl relative z-10">
            <div className="p-4 border-b border-border/50 flex items-center justify-between bg-muted/30">
              <h3 className="font-semibold flex items-center gap-2">
                <MailIcon className="w-4 h-4 text-primary" />
                Secure Inbox
              </h3>
              <span className="text-xs font-mono px-2 py-1 bg-primary/10 border border-primary/30 text-primary rounded-full shadow-[0_0_10px_-3px_var(--color-primary)]">
                {messages.length} MSG
              </span>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {isLoadingMessages && messages.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground flex flex-col items-center gap-3">
                  <RefreshCw className="w-5 h-5 animate-spin text-primary/50" />
                  <p className="text-sm font-mono tracking-widest uppercase">Syncing...</p>
                </div>
              ) : messages.length === 0 ? (
                <div className="p-12 text-center text-muted-foreground flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full border border-dashed border-border flex items-center justify-center bg-muted/30 relative">
                    <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping"></div>
                    <MailIcon className="w-6 h-6 opacity-50" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Inbox is empty</p>
                    <p className="text-sm mt-1">Awaiting incoming transmissions. Auto-refreshes every 5s.</p>
                  </div>
                </div>
              ) : (
                <div className="divide-y divide-border/50">
                  {messages.map((msg: any) => (
                    <button
                      key={msg.id}
                      onClick={() => setSelectedMessageId(msg.id)}
                      className={cn(
                        "w-full text-left p-4 hover:bg-muted/50 transition-colors relative group block",
                        selectedMessageId === msg.id && "bg-primary/10 border-l-2 border-l-primary"
                      )}
                    >
                      {!msg.seen && (
                        <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] animate-pulse"></span>
                      )}
                      <div className="flex items-center gap-2 mb-1 pr-6">
                        <span className="font-semibold truncate text-sm text-foreground/90">{msg.from.name || msg.from.address}</span>
                      </div>
                      <p className="text-sm font-medium truncate mb-1 text-foreground/80">{msg.subject || 'No Subject'}</p>
                      <p className="text-xs text-muted-foreground truncate">{msg.intro}</p>
                      <p className="text-[10px] font-mono text-muted-foreground mt-3 uppercase tracking-wider">
                        {formatDistanceToNow(new Date(msg.createdAt))} ago
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* MESSAGE DETAIL */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col border border-border/50 rounded-2xl bg-card overflow-hidden shadow-xl relative z-10">
            {selectedMessageId ? (
              <MessageDetail id={selectedMessageId} onDelete={() => {
                deleteMessage(selectedMessageId);
                setSelectedMessageId(null);
                toast('Message vaporized', { icon: <Trash2 className="w-4 h-4 text-destructive" /> });
              }} />
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(176,38,255,0.05)_0%,transparent_50%)] group-hover:opacity-100 transition-opacity"></div>
                <Zap className="w-16 h-16 text-primary/20 mb-6 drop-shadow-[0_0_15px_rgba(176,38,255,0.2)]" />
                <p className="font-mono text-sm tracking-widest uppercase relative z-10">Select a message to decode</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function MessageDetail({ id, onDelete }: { id: string, onDelete: () => void }) {
  const { data: message, isLoading } = useMessage(id);

  if (isLoading || !message) {
    return (
      <div className="flex-1 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>
        <RefreshCw className="w-6 h-6 animate-spin text-primary relative z-10" />
      </div>
    );
  }

  const renderContent = () => {
    if (message.html) {
      return (
        <iframe
          srcDoc={message.html}
          className="w-full min-h-[500px] flex-1 bg-white rounded-lg border border-border mt-6 text-black"
          sandbox="allow-same-origin allow-popups"
          title="Message Content"
        />
      );
    }
    return (
      <div className="w-full flex-1 bg-background rounded-lg border border-border mt-6 p-6 whitespace-pre-wrap font-mono text-sm shadow-inner">
        {message.text}
      </div>
    );
  };

  return (
    <div className="flex-1 flex flex-col h-full absolute inset-0 bg-card/50">
      <div className="p-6 border-b border-border/50 shrink-0 bg-muted/20 backdrop-blur">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold mb-4 break-words leading-tight">{message.subject || 'No Subject'}</h2>
            <div className="flex flex-col gap-2 text-sm bg-background/50 p-4 rounded-xl border border-border/30">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground w-12 font-mono text-xs uppercase">From:</span>
                <span className="font-semibold truncate">{message.from.name}</span>
                <span className="text-muted-foreground truncate font-mono text-xs px-2 py-0.5 bg-muted rounded">&lt;{message.from.address}&gt;</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground w-12 font-mono text-xs uppercase">To:</span>
                <span className="font-mono text-xs px-2 py-0.5 bg-muted rounded truncate">{message.to[0].address}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-muted-foreground w-12 font-mono text-xs uppercase">Date:</span>
                <span className="text-muted-foreground">{format(new Date(message.createdAt), 'PPpp')}</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onDelete} className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 shrink-0 border border-transparent hover:border-destructive/30 rounded-xl">
            <Trash2 className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-transparent to-background/50">
        {renderContent()}
      </div>
    </div>
  );
}