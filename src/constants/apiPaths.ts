const normalizeImportBaseUrl = (url?: string) => {
  if (!url) return undefined;

  const trimmedUrl = url.replace(/\/+$/, "");

  return trimmedUrl.endsWith("/import")
    ? trimmedUrl.slice(0, -"/import".length)
    : trimmedUrl;
};

const DEFAULT_API_BASE_URL =
  "https://590h4egykb.execute-api.eu-central-1.amazonaws.com/prod";

const importApiBaseUrl =
  normalizeImportBaseUrl(import.meta.env.VITE_IMPORT_API_BASE_URL) ??
  DEFAULT_API_BASE_URL;

const API_PATHS = {
  product: DEFAULT_API_BASE_URL,
  order: DEFAULT_API_BASE_URL,
  import: importApiBaseUrl,
  bff: DEFAULT_API_BASE_URL,
  cart: DEFAULT_API_BASE_URL,
};

export default API_PATHS;
