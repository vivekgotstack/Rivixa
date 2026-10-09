import { specialties } from "@/lib/site";

export const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
];

export const sectionLinks = [
  { href: "/blogs", label: "Blogs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/corporate-events", label: "Corporate Events" },
  { href: "/career", label: "Career" },
];

export const productLinks = [
  ...specialties.map((area) => ({
    href: `/therapeutic-areas/${area.slug}`,
    label: area.name,
  })),
  { href: "/products/general-products", label: "General Products" },
  { href: "/products/ent", label: "ENT" },
];
