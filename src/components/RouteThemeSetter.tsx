"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function getRouteBg(path: string): string {
  if (path.startsWith("/about")) return "#370617"; // deep burgundy
  if (path.startsWith("/education")) return "#03071E"; // rich black
  if (path.startsWith("/resources")) return "#FFBA08"; // amber
  if (path.startsWith("/contact")) return "#003e1f"; // dark green
  return "#FAF9F6"; // cream
}

export function RouteThemeSetter() {
  const pathname = usePathname();

  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const normalizedPath =
      basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) || "/" : pathname;
    const bg = getRouteBg(normalizedPath);
    document.documentElement.style.setProperty("--page-bg", bg);
    document.body.style.backgroundColor = bg;
  }, [pathname]);

  return null;
}

