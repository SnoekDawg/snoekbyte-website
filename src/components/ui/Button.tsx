'use client';

import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  target?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  external,
  target,
  onClick,
  disabled,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy active:scale-95';
  
  const variants = {
    primary: 'bg-pike text-white hover:bg-pike-700 hover:shadow-glow-pike focus:ring-pike',
    secondary: 'bg-transparent text-circuit border-2 border-circuit hover:bg-circuit/10 hover:shadow-glow-circuit focus:ring-circuit',
    ghost: 'bg-transparent text-gray-300 hover:text-circuit hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  const isExternal = external || target === '_blank';

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName} 
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
