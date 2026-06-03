'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Fuse from 'fuse.js';
import type { DocSearchEntry } from '@/lib/docs';

interface DocsSearchProps {
  index: DocSearchEntry[];
  basePath: string;
  placeholder: string;
  noResults: string;
  resultsLabel: string;
  categoryLabels: Record<string, string>;
}

function SearchIcon() {
  return (
    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
    </svg>
  );
}

export function DocsSearch({ index, basePath, placeholder, noResults, resultsLabel, categoryLabels }: DocsSearchProps) {
  const [query, setQuery] = useState('');

  const fuse = useMemo(
    () =>
      new Fuse(index, {
        keys: [
          { name: 'title', weight: 0.5 },
          { name: 'description', weight: 0.3 },
          { name: 'headings', weight: 0.2 },
        ],
        threshold: 0.4,
        ignoreLocation: true,
        minMatchCharLength: 2,
      }),
    [index]
  );

  const trimmed = query.trim();
  const results = useMemo(() => {
    if (trimmed.length < 2) return [];
    return fuse.search(trimmed).map((r) => r.item);
  }, [fuse, trimmed]);

  return (
    <div className="relative">
      <div className="flex items-center gap-3 rounded-xl bg-navy-light/60 border border-circuit/20 px-4 py-3 focus-within:border-circuit/60 transition-colors">
        <SearchIcon />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-white placeholder:text-gray-500 focus:outline-none text-sm"
          aria-label={placeholder}
        />
      </div>

      {trimmed.length >= 2 && (
        <div className="mt-3 rounded-xl bg-navy-light/80 border border-circuit/15 overflow-hidden">
          {results.length === 0 ? (
            <p className="px-4 py-4 text-sm text-gray-400">{noResults}</p>
          ) : (
            <>
              <p className="px-4 pt-3 pb-1 text-xs uppercase tracking-wider text-gray-500">
                {results.length} {resultsLabel}
              </p>
              <ul>
                {results.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`${basePath}/${item.slug}`}
                      className="block px-4 py-3 hover:bg-circuit/5 transition-colors border-t border-circuit/10 first:border-t-0"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium text-sm">{item.title}</span>
                        <span className="text-[10px] uppercase tracking-wider text-circuit bg-circuit/10 px-1.5 py-0.5 rounded">
                          {categoryLabels[item.category] ?? item.category}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-gray-400 text-xs mt-1 line-clamp-1">{item.description}</p>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
