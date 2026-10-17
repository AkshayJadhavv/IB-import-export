// Set NEXT_PUBLIC_SITE_URL in .env.local (e.g. https://www.yourdomain.com)
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com").replace(/\/$/, "");
export const SITE_NAME = "IB Import Export";
export const SITE_LOCATION = "Phaltan, Maharashtra, India";
