"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function getRouteBg(path: string): string {
  switch (path) {
    case "/about":
      return "#370617"; // deep burgundy
    case "/education":
      return "#03071E"; // rich black
    case "/resources":
      return "#FFBA08"; // amber
    case "/contact":
      return "#003e1f"; // dark green
    default:
      return "#FAF9F6"; // cream
  }
}

export function RouteThemeSetter() {
  const pathname = usePathname();

  useEffect(() => {
    const bg = getRouteBg(pathname);
    document.documentElement.style.setProperty("--page-bg", bg);
    document.body.style.backgroundColor = bg;
  }, [pathname]);

  return null;
}

