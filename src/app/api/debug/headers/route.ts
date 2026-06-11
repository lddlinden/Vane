/**
 * Debug endpoint to check headers from Pangolin proxy
 * Only use this for debugging - remove in production
 */

export async function GET(req: Request) {
  const headers: Record<string, string> = {};

  // Extract all headers
  req.headers.forEach((value, key) => {
    // Include X-* headers and authorization headers
    if (
      key.toLowerCase().startsWith('x-') ||
      key.toLowerCase().startsWith('remote-') ||
      key.toLowerCase() === 'authorization'
    ) {
      headers[key] = value;
    }
  });

  return Response.json({
    timestamp: new Date().toISOString(),
    headers,
    allHeadersAvailable: Array.from(req.headers.keys()),
  });
}
