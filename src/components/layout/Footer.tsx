'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
import { getTranslation, getLocaleFromPath } from '@/lib/i18n';
import type { Locale } from '@/types';

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const t = getTranslation(locale);

  const footerLinks = locale === 'en'
    ? [
        {
          title: 'Products',
          items: [
            { label: 'BackorderPRO', href: `/${locale}/products` },
            { label: 'Pricing', href: `/${locale}/pricing` },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'Contact', href: `/${locale}/contact` },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Privacy Policy', href: `/${locale}/privacy/backorderpro` },
          ],
        },
      ]
    : [
        {
          title: 'Producten',
          items: [
            { label: 'BackorderPRO', href: `/${locale}/products` },
            { label: 'Prijzen', href: `/${locale}/pricing` },
          ],
        },
        {
          title: 'Bedrijf',
          items: [
            { label: 'Contact', href: `/${locale}/contact` },
          ],
        },
        {
          title: 'Juridisch',
          items: [
            { label: 'Privacybeleid', href: `/${locale}/privacy/backorderpro` },
          ],
        },
      ];

  return (
    <footer className="bg-navy-50/30 border-t border-circuit/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-circuit transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-circuit/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">{t.footer.copyright}</p>
          
          {/* Beta Badge */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-2 h-2 bg-pike rounded-full animate-pulse" />
            <span>{locale === 'en' ? 'Public Beta' : 'Publieke Beta'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
