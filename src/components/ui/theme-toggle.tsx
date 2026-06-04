"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

type ThemeToggleLabels = {
  toDark: string;
  toLight: string;
};

const STORAGE_KEY = "saiankith-portfolio-theme";
const THEME_QUERY = "(prefers-color-scheme: dark)";
const THEME_CHANGE_EVENT = "theme-change";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function getStoredTheme(): Theme | null {
  const savedTheme = window.localStorage.getItem(STORAGE_KEY);

  return savedTheme === "light" || savedTheme === "dark" ? savedTheme : null;
}

function getSnapshot(): Theme {
  return getStoredTheme() ??
    (window.matchMedia(THEME_QUERY).matches ? "dark" : "light");
}

function getServerSnapshot(): Theme {
  return "light";
}

function subscribe(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(THEME_QUERY);

  function handleThemeChange() {
    onStoreChange();
  }

  function handleStorage(event: StorageEvent) {
    if (event.key === STORAGE_KEY) {
      onStoreChange();
    }
  }

  function handleMediaChange() {
    if (!getStoredTheme()) {
      onStoreChange();
    }
  }

  window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange);
  window.addEventListener("storage", handleStorage);
  mediaQuery.addEventListener("change", handleMediaChange);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange);
    window.removeEventListener("storage", handleStorage);
    mediaQuery.removeEventListener("change", handleMediaChange);
  };
}

export function ThemeToggle({ labels }: { labels: ThemeToggleLabels }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
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
