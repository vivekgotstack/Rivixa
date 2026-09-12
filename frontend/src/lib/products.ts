import catalogue from "./products.json";

export type Product = {
  id: string;
  name: string;
  areas: string[];
  category: string;
  composition: string;
  pack: string;
  source: string;
  sourceUrl: string;
};

// Permanent, bundled catalogue. Updating this file requires a new frontend build.
export const products: Product[] = catalogue;
