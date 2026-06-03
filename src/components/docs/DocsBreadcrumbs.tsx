import React from 'react';
import Link from 'next/link';

export interface Crumb {
  label: string;
  href?: string;
}

export function DocsBreadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-400 flex-wrap" aria-label="Breadcrumb">
      {items.map((crumb, i) => (
        <React.Fragment key={`${crumb.label}-${i}`}>
          {i > 0 && <span className="text-gray-600">/</span>}
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-circuit transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-white">{crumb.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
