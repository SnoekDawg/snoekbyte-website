'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { openBelcoChat } from '@/lib/belco';

interface LiveChatButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  onAfterClick?: () => void;
}

export function LiveChatButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  onAfterClick,
}: LiveChatButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() => {
        openBelcoChat();
        onAfterClick?.();
      }}
    >
      {children}
    </Button>
  );
}
