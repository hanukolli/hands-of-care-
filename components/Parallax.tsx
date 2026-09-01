"use client";

import { ReactNode, useRef } from "react";

/**
 * Tilts its children slightly toward the cursor. A small, playful
 * interaction for the hero — resets on mouse leave, and does nothing
 * for touch/reduced-motion users beyond the static layout.
 */
export default function Parallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "rotateY(0deg) rotateX(0deg)";
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      ref={ref}
      className="transition-transform duration-300 ease-out [transform-style:preserve-3d]"
    >
      {children}
    </div>
  );
}
