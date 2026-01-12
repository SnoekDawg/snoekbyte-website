import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Pike/Snoek SVG Icon */}
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle with circuit pattern */}
        <circle cx="24" cy="24" r="23" fill="#0A1628" stroke="#4DC3E0" strokeWidth="1" />
        
        {/* Circuit lines */}
        <path
          d="M8 24h4M36 24h4M24 8v4M24 36v4"
          stroke="#4DC3E0"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle cx="12" cy="24" r="1.5" fill="#4DC3E0" opacity="0.7" />
        <circle cx="36" cy="24" r="1.5" fill="#4DC3E0" opacity="0.7" />
        <circle cx="24" cy="12" r="1.5" fill="#4DC3E0" opacity="0.7" />
        <circle cx="24" cy="36" r="1.5" fill="#4DC3E0" opacity="0.7" />
        
        {/* Simplified Pike fish */}
        <path
          d="M14 24c0-6 4-10 10-10 4 0 7 2 9 5l4-2c0 0-1 4-1 7s1 7 1 7l-4-2c-2 3-5 5-9 5-6 0-10-4-10-10z"
          fill="#5CB85C"
          stroke="#3D7A3D"
          strokeWidth="1"
        />
        
        {/* Fish eye */}
        <circle cx="28" cy="22" r="2" fill="#0A1628" />
        <circle cx="28.5" cy="21.5" r="0.75" fill="white" />
        
        {/* Fish fin detail */}
        <path
          d="M20 20c-2 2-2 6 0 8"
          stroke="#3D7A3D"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Binary code suggestion */}
        <text x="32" y="30" fontSize="4" fill="#4DC3E0" fontFamily="monospace" opacity="0.8">01</text>
        <text x="32" y="34" fontSize="4" fill="#4DC3E0" fontFamily="monospace" opacity="0.6">10</text>
      </svg>
      
      {showText && (
        <span className="text-xl font-bold">
          <span className="text-white">Snoek</span>
          <span className="text-circuit">Byte</span>
        </span>
      )}
    </div>
  );
}
