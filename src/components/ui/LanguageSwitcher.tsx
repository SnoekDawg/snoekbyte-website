'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

const languages: { code: Locale; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
];

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile';
}

export function LanguageSwitcher({ variant = 'desktop' }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname) as Locale;
  
  const currentLanguage = languages.find(l => l.code === currentLocale) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const getLocalizedPath = (locale: string) => {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '';
    return `/${locale}${pathWithoutLocale}`;
  };

  if (variant === 'mobile') {
    return (
      <div className="space-y-2">
        <div className="text-sm text-gray-400 px-2 mb-2">
          Select Language
        </div>
        <div className="grid grid-cols-2 gap-2">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={getLocalizedPath(lang.code)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                currentLocale === lang.code
                  ? 'bg-circuit/20 text-circuit border border-circuit/30'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-circuit/30 transition-all"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 py-2 bg-navy border border-circuit/30 rounded-xl shadow-xl shadow-black/20 z-50 animate-fade-in">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={getLocalizedPath(lang.code)}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                currentLocale === lang.code
                  ? 'bg-circuit/10 text-circuit'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
              {currentLocale === lang.code && (
                <svg className="w-4 h-4 ml-auto text-circuit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
