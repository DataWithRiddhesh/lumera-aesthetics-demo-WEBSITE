// Centralized configuration for external integrations.
// These values are read from Vite environment variables at build time.
// Copy .env.example to .env and fill in your own values.

export const N8N_WEBHOOK_URL: string =
  import.meta.env.VITE_N8N_WEBHOOK_URL ?? '';

export const BOOKING_URL: string =
  import.meta.env.VITE_BOOKING_URL ?? '#book-consultation';
