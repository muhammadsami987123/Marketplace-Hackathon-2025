import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Define the type for the Sanity image object
interface SanityImageSource {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,    
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-13", 
  useCdn: process.env.NEXT_PUBLIC_USE_CDN === "production", 
});

const builder = imageUrlBuilder(sanityClient);

// Use the defined type for the `source` parameter
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}