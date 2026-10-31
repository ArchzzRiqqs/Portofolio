import { useCallback, useEffect, useState } from "react";

const KEY = "theme";
const root = () => document.documentElement;
const systemTheme = () =>
  window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";

const readStored = () => {
  try { return localStorage.getItem(KEY); } catch { return null; }
};

export function useTheme() {
  const [theme, setTheme] = useState(() => root().dataset.theme || systemTheme());

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => {
      if (readStored()) return;
      const next = mq.matches ? "light" : "dark";
      root().dataset.theme = next;
      setTheme(next);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    root().dataset.theme = next;
    try { localStorage.setItem(KEY, next); } catch { /* penyimpanan diblokir: abaikan */ }
    setTheme(next);
  }, [theme]);

  return [theme, toggle];
}
