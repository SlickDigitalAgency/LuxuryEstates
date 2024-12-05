import React from 'react';
import { cn } from '@/lib/utils';

interface SpotlightProps {
  className?: string;
}

export function Spotlight({ className }: SpotlightProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-30 transition-all duration-300",
        className
      )}
      style={{
        background:
          "radial-gradient(800px circle at var(--x) var(--y), rgba(255,182,255,.1), transparent 40%)",
      }}
    />
  );
}