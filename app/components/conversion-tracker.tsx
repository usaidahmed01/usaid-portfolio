"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function ConversionTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const tracked = target?.closest<HTMLElement>("[data-track]");
      if (!tracked) return;
      const name = tracked.dataset.track;
      if (!name) return;
      const payload = { event: "portfolio_conversion", action: name, path: window.location.pathname };
      window.dataLayer?.push(payload);
      window.plausible?.("Portfolio conversion", { props: { action: name, path: window.location.pathname } });
      window.dispatchEvent(new CustomEvent("portfolio:conversion", { detail: payload }));
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
