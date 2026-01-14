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

  const footerLinks = [
    {
      title: t.nav.apps,
      links: [
        { label: 'BackorderPRO', href: `/${locale}/apps/backorderpro` },
        { label: locale === 'nl' ? 'Alle Apps' : 'All Apps', href: `/${locale}/apps` },
      ],
    },
    {
      title: t.nav.services,
      links: [
        { label: t.services.webdev.name, href: `/${locale}/services/web-development` },
        { label: t.services.marketing.name, href: `/${locale}/services/marketing` },
        { label: t.services.appdev.name, href: `/${locale}/services/app-development` },
      ],
    },
    {
      title: locale === 'nl' ? 'Bedrijf' : 'Company',
      links: [
        { label: t.nav.contact, href: `/${locale}/contact` },
        { label: locale === 'nl' ? 'Privacybeleid' : 'Privacy Policy', href: `/${locale}/privacy/backorderpro` },
      ],
    },
  ];

  return (
    <footer className="bg-navy border-t border-circuit/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & description */}
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-circuit transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-circuit/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              {t.footer.copyright}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:info@snoekbyte.nl"
                className="text-gray-400 hover:text-circuit transition-colors text-sm"
              >
                info@snoekbyte.nl
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
