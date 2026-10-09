"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { company } from "@/lib/site";
import type { Product } from "@/lib/products";

export function ProductCatalogue({ products, area }: { products: Product[]; area: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const groups = [...new Set(products.map(p => p.category))].sort();
  const needle = query.trim().toLowerCase();
  const filtered = products.filter(p => (!category || p.category === category) && `${p.name} ${p.composition} ${p.category}`.toLowerCase().includes(needle));

  if (!products.length) return null;

  return <section id="products" className="catalogue" aria-labelledby="catalogue-title">
    <div className="section-heading">
      <div><p className="eyebrow">THE RIVIXA RANGE</p><h2 id="catalogue-title">Focused on vision.<br/><span>Formulated with care.</span></h2></div>
      <p>Explore our {area.toLowerCase()} portfolio. Browse product compositions and pack sizes, or contact our team for more information.</p>
    </div>
    <div className="catalogue-controls">
      <label className="catalogue-search"><Search size={18} aria-hidden="true"/><span className="sr-only">Search products or composition</span><input type="search" placeholder="Search products or composition…" value={query} onChange={e=>setQuery(e.target.value)}/></label>
      <label><span className="sr-only">Filter by product group</span><select value={category} onChange={e=>setCategory(e.target.value)}><option value="">All product groups</option>{groups.map(g=><option key={g}>{g}</option>)}</select></label>
    </div>
    <p className="catalogue-count" role="status">{filtered.length} of {products.length} products</p>
    <div className="catalogue-grid">
      {filtered.map(p=><article className="product-card" key={p.id}>
        <div className="product-image"><Image src={p.image} alt={`${p.name} eye drops — illustrative carton and bottle presentation`} fill sizes="(max-width: 650px) 90vw, (max-width: 1000px) 44vw, 30vw"/><span className="product-pack">{p.pack || "EYE DROPS"}</span></div>
        <div className="product-body">
          <div className="product-meta"><span>{p.category}</span><span>RIVIXA</span></div>
          <h3>{p.name}</h3>
          <dl><div><dt>Composition</dt><dd>{p.composition || "Product specifications coming soon. Contact our team for details."}</dd></div></dl>
          {p.pending && <p className="product-pending">Illustrative packaging · Details pending</p>}
          <div className="product-actions"><a className="text-link" href={`mailto:${company.email}?subject=${encodeURIComponent(`Product enquiry: ${p.name}`)}&body=${encodeURIComponent(`Hello Rivixa team,\n\nPlease share availability and product information for ${p.name} (${area}).\n\nThank you.`)}`}>Enquire <ArrowUpRight size={16}/></a></div>
        </div>
      </article>)}
    </div>
    {filtered.length === 0 && <div className="catalogue-empty"><h3>No matching products</h3><p>Try another name or composition, or clear your filters.</p><button className="text-link" onClick={()=>{setQuery("");setCategory("");}}>Clear filters</button></div>}
    <p className="catalogue-note">Pack images are illustrative. Contact our team for product information and consult a healthcare professional for use.</p>
  </section>;
}
