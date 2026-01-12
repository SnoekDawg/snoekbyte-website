import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizes = {
    sm: { width: 32, height: 32 },
    md: { width: 40, height: 40 },
    lg: { width: 56, height: 56 },
  };

  const { width, height } = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/images/logo.png"
        alt="SnoekByte Logo"
        width={width}
        height={height}
        className="rounded-lg"
        priority
      />
      
      {showText && (
        <span className="text-xl font-bold">
          <span className="text-white">Snoek</span>
          <span className="text-circuit">Byte</span>
        </span>
      )}
    </div>
  );
}
