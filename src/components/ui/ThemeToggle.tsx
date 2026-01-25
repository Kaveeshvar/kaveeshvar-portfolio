"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./Button";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-9 w-24" />;

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <Button
      variant="ghost"
      className="gap-2"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <span className="text-xs">{isDark ? "Dark" : "Light"}</span>
      <span className="text-base">{isDark ? "🌙" : "☀️"}</span>
    </Button>
  );
}
