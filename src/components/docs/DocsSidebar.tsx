import React from 'react';
import Link from 'next/link';

export interface SidebarItem {
  slug: string;
  title: string;
}

export interface SidebarGroup {
  category: string;
  label: string;
  items: SidebarItem[];
}

interface DocsSidebarProps {
  groups: SidebarGroup[];
  basePath: string;
  currentSlug?: string;
  title: string;
}

export function DocsSidebar({ groups, basePath, currentSlug, title }: DocsSidebarProps) {
  return (
    <nav aria-label={title} className="space-y-7">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{title}</p>
      {groups.map((group) => (
        <div key={group.category}>
          <p className="text-sm font-semibold text-white mb-2">{group.label}</p>
          <ul className="space-y-1 border-l border-circuit/15">
            {group.items.map((item) => {
              const active = item.slug === currentSlug;
              return (
                <li key={item.slug}>
                  <Link
                    href={`${basePath}/${item.slug}`}
                    className={`block -ml-px border-l-2 pl-3 py-1 text-sm transition-colors ${
                      active
                        ? 'border-circuit text-circuit font-medium'
                        : 'border-transparent text-gray-400 hover:text-white hover:border-circuit/40'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
