"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CountUpValueProps = {
  value: string | number;
  className?: string;
  duration?: number;
  label?: string;
};

function readValue(rawValue: string | number) {
  const raw = String(rawValue);
  const match = raw.match(/^(.*?)(\d+(?:\.\d+)?)(.*?)$/);
  if (!match) return null;
  const numeric = Number(match[2]);
  if (!Number.isFinite(numeric)) return null;
  const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
  const integerWidth = decimals === 0 && /^0\d+$/.test(match[2]) ? match[2].length : 0;
  return { prefix: match[1], numeric, suffix: match[3], decimals, integerWidth };
}

export function CountUpValue({ value, className, duration = 1400, label }: CountUpValueProps) {
  const parsed = useMemo(() => readValue(value), [value]);
  const targetRef = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!parsed) return;
    const target = targetRef.current;
    if (!target) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(parsed.numeric);
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.45 });
    observer.observe(target);
    return () => observer.disconnect();
  }, [parsed]);

  useEffect(() => {
    if (!started || !parsed) return;
    const start = performance.now();
    let frame = 0;
    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(parsed.numeric * eased);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [duration, parsed, started]);

  if (!parsed) return <span className={className}>{value}</span>;
  const formatted = parsed.decimals > 0
    ? current.toFixed(parsed.decimals)
    : String(Math.round(current)).padStart(parsed.integerWidth, "0");

  return <span ref={targetRef} className={`count-up-value${className ? ` ${className}` : ""}`} aria-label={label || String(value)}>
    {parsed.prefix}{formatted}{parsed.suffix}
  </span>;
}
