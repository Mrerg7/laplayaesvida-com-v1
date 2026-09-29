/**
 * Cloudflare Worker — static assets + edge security headers (Workers free plan).
 * Keeps apex canonical: www → non-www 301.
 */
const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'X-DNS-Prefetch-Control': 'on',
};

function withSecurityHeaders(response) {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(key, value);
  }
  // Prefer a tight baseline CSP that still allows Google Fonts + mailto flows.
  if (!headers.has('Content-Security-Policy')) {
    headers.set(
      'Content-Security-Policy',
      [
        "default-src 'self'",
        "img-src 'self' data: blob: https:",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com data:",
        "script-src 'self' 'unsafe-inline'",
        "connect-src 'self'",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self' mailto:",
      ].join('; '),
    );
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === 'www.laplayaesvida.com') {
      url.hostname = 'laplayaesvida.com';
      return Response.redirect(url.toString(), 301);
    }

    // Normalize accidental duplicate content paths
    if (url.pathname === '/index.html') {
      url.pathname = '/';
      return Response.redirect(url.toString(), 301);
    }

    const assetResponse = await env.ASSETS.fetch(request);
    return withSecurityHeaders(assetResponse);
  },
};
