type BelcoApi = ((method: string, ...args: unknown[]) => unknown) & {
  _q?: unknown[][];
  load?: (callback: () => void) => void;
};

declare global {
  interface Window {
    Belco?: BelcoApi;
    belcoFunction?: string;
  }
}

/** Opens the Belco chat widget. Safe to call before the widget script has finished loading. */
export function openBelcoChat(): void {
  if (typeof window === 'undefined') return;

  const fnName = window.belcoFunction || 'Belco';
  const belco =
    fnName === 'Belco'
      ? window.Belco
      : (window as unknown as Record<string, BelcoApi | undefined>)[fnName];

  if (typeof belco === 'function') {
    belco('open');
  }
}
