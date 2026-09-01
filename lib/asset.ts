const BASE = process.env.NODE_ENV === "production" ? "/Il_mio_portfolio" : "";

export function asset(path: string): string {
  if (!path) return path;
  // already prefixed
  if (path.startsWith(BASE) && BASE !== "") return path;
  // normalize ./ -> /
  if (path.startsWith("./")) path = "/" + path.slice(2);
  if (!path.startsWith("/")) path = "/" + path;
  return `${BASE}${path}`;
}
