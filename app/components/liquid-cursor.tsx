"use client";

import { useEffect, useRef } from "react";

export function LiquidCursor() {
  const primary = useRef<HTMLDivElement>(null);
  const trail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetX = -120;
    let targetY = -120;
    let trailX = targetX;
    let trailY = targetY;
    let frame = 0;

    const move = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      primary.current?.style.setProperty("--cursor-x", `${targetX}px`);
      primary.current?.style.setProperty("--cursor-y", `${targetY}px`);

      const interactive = (event.target as HTMLElement | null)?.closest(
        "a, button, input, textarea, select, summary, .liquid-target",
      );
      primary.current?.classList.toggle("is-hovering", Boolean(interactive));
      trail.current?.classList.toggle("is-hovering", Boolean(interactive));
    };

    const animate = () => {
      trailX += (targetX - trailX) * 0.13;
      trailY += (targetY - trailY) * 0.13;
      trail.current?.style.setProperty("--cursor-x", `${trailX}px`);
      trail.current?.style.setProperty("--cursor-y", `${trailY}px`);
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", move, { passive: true });
    frame = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="liquid-cursor-layer" aria-hidden="true"><div ref={trail} className="liquid-cursor liquid-cursor-trail" /><div ref={primary} className="liquid-cursor liquid-cursor-primary" /></div>;
}
