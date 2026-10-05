import catalogue from "./products.json";

export type Product = {
  id: string;
  name: string;
  areas: string[];
  category: string;
  composition: string;
  pack: string;
  image: string;
  leaflet?: string;
  pending?: boolean;
};

// Permanent, bundled catalogue. Updating this file requires a new frontend build.
export const products: Product[] = catalogue;
