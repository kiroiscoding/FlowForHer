export const SITE_NAME = "Flow for Her";
export const DEFAULT_SITE_URL = "https://flowforher.com";

export function getBasePath(): string {
  // Used for GitHub Pages-style deployments where the app is served from a subpath.
  // Example: "/flow-for-her"
  return process.env.NEXT_PUBLIC_BASE_PATH || "";
}

export function withBasePath(path: string): string {
  const basePath = getBasePath();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return basePath ? `${basePath}${normalized}` : normalized;
}

export function getSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;
  return new URL(raw);
}

export function absoluteUrl(path: string): string {
  const url = getSiteUrl();
  url.pathname = withBasePath(path);
  url.search = "";
  url.hash = "";
  return url.toString();
}

