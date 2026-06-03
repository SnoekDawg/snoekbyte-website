import React from 'react';
import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';

/**
 * Styled component map for MDX docs articles.
 * Dark theme (navy background) with circuit/pike accents — no typography plugin,
 * so every element is tuned to match the rest of the site.
 */
export const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1 className="text-3xl md:text-4xl font-bold text-white mt-0 mb-6 scroll-mt-28" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="group text-2xl font-bold text-white mt-12 mb-4 pb-2 border-b border-circuit/15 scroll-mt-28"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-xl font-semibold text-white mt-8 mb-3 scroll-mt-28" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="text-lg font-semibold text-circuit mt-6 mb-2 scroll-mt-28" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p className="text-gray-300 leading-relaxed my-4" {...props}>
      {children}
    </p>
  ),
  a: ({ href, children, ...props }) => {
    const url = String(href ?? '');
    const isInternal = url.startsWith('/');
    if (isInternal) {
      return (
        <Link href={url} className="text-circuit underline underline-offset-2 hover:text-circuit-300 transition-colors">
          {children}
        </Link>
      );
    }
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-circuit underline underline-offset-2 hover:text-circuit-300 transition-colors"
        {...props}
      >
        {children}
      </a>
    );
  },
  ul: ({ children, ...props }) => (
    <ul className="my-4 space-y-2 text-gray-300 list-disc pl-6 marker:text-circuit" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="my-4 space-y-2 text-gray-300 list-decimal pl-6 marker:text-circuit" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-relaxed pl-1" {...props}>
      {children}
    </li>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-white" {...props}>
      {children}
    </strong>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-6 border-l-4 border-circuit bg-circuit/5 rounded-r-lg px-5 py-3 text-gray-200 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }) => (
    <code
      className="rounded bg-navy-900/80 border border-circuit/20 px-1.5 py-0.5 text-sm font-mono text-circuit-200"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre
      className="my-6 overflow-x-auto rounded-xl bg-navy-900/90 border border-circuit/20 p-4 text-sm font-mono text-gray-200 [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-gray-200"
      {...props}
    >
      {children}
    </pre>
  ),
  table: ({ children, ...props }) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-circuit/15">
      <table className="w-full border-collapse text-left text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-navy-200/60" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }) => (
    <th className="px-4 py-3 font-semibold text-white border-b border-circuit/15" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="px-4 py-3 text-gray-300 border-b border-circuit/10 align-top" {...props}>
      {children}
    </td>
  ),
  hr: (props) => <hr className="my-10 border-circuit/15" {...props} />,
  img: ({ src, alt, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={String(src ?? '')}
      alt={String(alt ?? '')}
      className="my-6 rounded-xl border border-circuit/15 w-full"
      {...props}
    />
  ),
};
