import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-4 text-center px-4">
        <AlertCircle className="w-16 h-16 text-destructive animate-pulse drop-shadow-[0_0_15px_rgba(255,0,0,0.3)]" />
        <h1 className="text-4xl font-bold font-mono tracking-tight">404 - Signal Lost</h1>
        <p className="text-muted-foreground max-w-md">The transmission you are looking for has vanished into the digital void.</p>
        <Button variant="neon" className="mt-6" asChild>
          <Link href="/">Return to Hub</Link>
        </Button>
      </div>
    </div>
  );
}