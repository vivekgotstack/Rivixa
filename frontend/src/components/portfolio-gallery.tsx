"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/products";

const areas = [
  { key: "all", label: "All products" },
  { key: "gynaecology", label: "Gynaecology" },
  { key: "ophthalmology", label: "Ophthalmology" },
  { key: "orthopedic", label: "Orthopedic" },
  { key: "general-products", label: "General products" },
];
const areaHref: Record<string, string> = {
  gynaecology: "/therapeutic-areas/gynaecology",
  ophthalmology: "/therapeutic-areas/ophthalmology",
  orthopedic: "/therapeutic-areas/orthopedic",
  "general-products": "/products/general-products",
};
const publishedProducts = products.filter((product) => !product.pending && product.image);

export function PortfolioGallery() {
  const [selected, setSelected] = useState("all");
  const visible = publishedProducts.filter((product) => selected === "all" || product.areas.includes(selected));
  return <div className="portfolio-gallery">
    <div className="gallery-filters" role="group" aria-label="Filter product gallery">
      {areas.map((area) => <button key={area.key} type="button" aria-pressed={selected === area.key} className={selected === area.key ? "active" : ""} onClick={() => setSelected(area.key)}>{area.label}</button>)}
    </div>
    <p className="gallery-count" role="status">Showing {visible.length} illustrative product {visible.length === 1 ? "image" : "images"}</p>
    <div className="gallery-grid">{visible.map((product) => {
      const area = product.areas.find((entry) => areaHref[entry]) || "general-products";
      return <article className="gallery-card" key={product.id}>
        <div className="gallery-image"><Image src={product.image} alt={`${product.name} product packaging illustration`} fill sizes="(max-width: 650px) 90vw, (max-width: 950px) 45vw, 30vw" /></div>
        <div className="gallery-card-body"><span className="small-label">{product.category}</span><h3>{product.name}</h3><p>{product.composition}</p><Link className="text-link" href={areaHref[area]}>Explore portfolio<ArrowUpRight size={16} /></Link></div>
      </article>;
    })}</div>
    <p className="gallery-disclosure">Packaging images are illustrative portfolio visuals. Refer to the supplied product label and contact Rivixa to confirm current product particulars.</p>
  </div>;
}
