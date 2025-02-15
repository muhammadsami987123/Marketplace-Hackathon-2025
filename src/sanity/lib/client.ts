import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Use NEXT_PUBLIC_ prefix
  dataset: "production",
  useCdn: false, // Use the Sanity CDN for faster reads
  apiVersion: "2025-01-13", // Use a recent API version
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Optional: Only required for write operations
});

