// app/components/ThemeSwitch.tsx
"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return <FiSun className="w-4 h-4" onClick={() => setTheme("light")} />;

  if (resolvedTheme === "dark") {
    return <FiSun className="w-4 h-4" onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    return <FiMoon className="w-4 h-4" onClick={() => setTheme("dark")} />;
  }
}
