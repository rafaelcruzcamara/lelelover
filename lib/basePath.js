// GitHub Pages serves this site from /lelelover/, not from the domain root.
// The Android app (Capacitor) and local dev serve from the root instead, so
// this only gets set to "/lelelover" by the `build:ghpages` script.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path) {
  return `${BASE_PATH}${path}`;
}
