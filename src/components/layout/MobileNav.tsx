'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { getTranslation } from '@/lib/i18n';
import type { Locale, NavItem } from '@/types';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  locale: Locale;
  currentPath: string;
}

export function MobileNav({ isOpen, onClose, navItems, locale, currentPath }: MobileNavProps) {
  const t = getTranslation(locale);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return currentPath === `/${locale}` || currentPath === `/${locale}/`;
    }
    return currentPath.startsWith(href);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Slide-out panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-navy z-50 transform transition-transform duration-300 ease-out md:hidden overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-circuit/20">
          <Logo />
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-circuit transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 animate-slide-in-right ${
                    isActive(item.href)
                      ? 'bg-circuit/10 text-circuit'
                      : 'text-gray-300 hover:bg-white/5 hover:text-circuit'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Switcher Section */}
        <div className="p-4 border-t border-circuit/20">
          <LanguageSwitcher variant="mobile" />
        </div>

        {/* CTA Button */}
        <div className="p-4 border-t border-circuit/20">
          <Button variant="primary" className="w-full" href={`/${locale}/contact`} onClick={onClose}>
            {t.hero.secondaryCta}
          </Button>
        </div>
      </div>
    </>
  );
}
