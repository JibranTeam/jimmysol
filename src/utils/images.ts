// Unsplash (imgix) srcset helper: serve WebP at the displayed width instead of
// the single 800px JPG every image currently requests. The <img> containers
// fix the display aspect with aspect-ratio + object-cover, so dropping the
// fixed h=500 crop from the variants is safe. src stays as the JPG fallback.
export function unsplashSrcSet(url: string): string {
  try {
    const widths = [400, 800, 1200];
    return widths.map((w) => {
      const u = new URL(url);
      u.searchParams.set('w', String(w));
      u.searchParams.delete('h');
      u.searchParams.set('fm', 'webp');
      return u.toString() + ' ' + w + 'w';
    }).join(', ');
  } catch {
    return '';
  }
}
