"use client";

import { useEffect } from "react";

export function ScrollDepth() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      document.documentElement.style.setProperty("--scroll-depth", "0");
      document.documentElement.style.setProperty("--scroll-depth-soft", "0");
      return;
    }

    let frameId = 0;

    const updateDepth = () => {
      frameId = 0;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      document.documentElement.style.setProperty(
        "--scroll-depth",
        progress.toFixed(4),
      );
      document.documentElement.style.setProperty(
        "--scroll-depth-soft",
        (progress * 0.5).toFixed(4),
      );
    };

    const onScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateDepth);
    };

    updateDepth();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return null;
}
