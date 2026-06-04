"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

type ThemeToggleLabels = {
  toDark: string;
  toLight: string;
};

const STORAGE_KEY = "saiankith-portfolio-theme";
const THEME_EVENT = "portfolio-theme-change";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleChange = () => {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    const resolvedTheme: Theme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : mediaQuery.matches
          ? "dark"
          : "light";

    applyTheme(resolvedTheme);
    callback();
  };

  window.addEventListener("storage", handleChange);
  window.addEventListener(THEME_EVENT, handleChange);
  mediaQuery.addEventListener("change", handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(THEME_EVENT, handleChange);
    mediaQuery.removeEventListener("change", handleChange);
  };
}

export function ThemeToggle({ labels }: { labels: ThemeToggleLabels }) {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, () => "light");

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  return (
    <button
      type="button"
      aria-label={theme === "dark" ? labels.toLight : labels.toDark}
      className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-border bg-surface px-3 text-sm font-medium text-text hover:border-accent hover:text-accent"
      onClick={toggleTheme}
    >
      <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
    </button>
  );
}
