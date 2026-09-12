"use client";

import { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { company } from "@/lib/site";
import type { Product } from "@/lib/products";

export function ProductCatalogue({ products, area }: { products: Product[]; area: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const groups = [...new Set(products.map(p => p.category))].sort();
  const needle = query.trim().toLowerCase();
  const filtered = products.filter(p => (!category || p.category === category) && (!source || p.source === source) && `${p.name} ${p.composition} ${p.category} ${p.source}`.toLowerCase().includes(needle));

  return <section id="products" className="catalogue" aria-labelledby="catalogue-title">
    <div className="section-heading">
      <div><p className="eyebrow">PRODUCT INFORMATION</p><h2 id="catalogue-title">Explore the catalogue.</h2></div>
      <p>Browse formulations and published specifications for {area.toLowerCase()}. Contact our team for availability.</p>
    </div>
    <div className="catalogue-controls">
      <label className="catalogue-search"><Search size={18} aria-hidden="true"/><span className="sr-only">Search products or composition</span><input type="search" placeholder="Search products or composition…" value={query} onChange={e=>setQuery(e.target.value)}/></label>
      <label><span className="sr-only">Filter by product group</span><select value={category} onChange={e=>setCategory(e.target.value)}><option value="">All product groups</option>{groups.map(g=><option key={g}>{g}</option>)}</select></label>
      <label><span className="sr-only">Filter by source brand</span><select value={source} onChange={e=>setSource(e.target.value)}><option value="">All source brands</option>{[...new Set(products.map(p=>p.source))].sort().map(s=><option key={s}>{s}</option>)}</select></label>
    </div>
    <p className="catalogue-count" role="status">{filtered.length} of {products.length} products</p>
    <div className="catalogue-grid">
      {filtered.map(p=><article className="product-card" key={p.id}>
        <div className="product-meta"><span>{p.category}</span><span>{p.source}</span></div>
        <h3>{p.name}</h3>
        <dl><div><dt>Composition / specification</dt><dd>{p.composition || "Specification to be confirmed. Please enquire for details."}</dd></div>{p.pack && <div><dt>Pack size</dt><dd>{p.pack}</dd></div>}</dl>
        <div className="product-actions"><a className="text-link" href={`mailto:${company.email}?subject=${encodeURIComponent(`Product enquiry: ${p.name}`)}&body=${encodeURIComponent(`Hello Rivixa team,\n\nPlease share availability and product information for ${p.name} (${area}).\nReference brand: ${p.source}\n\nThank you.`)}`}>Enquire <ArrowUpRight size={16}/></a><a href={p.sourceUrl} target="_blank" rel="noreferrer" className="product-source" aria-label={`View ${p.name} on ${p.source}`}>Source details <ArrowUpRight size={13}/></a></div>
      </article>)}
    </div>
    {filtered.length === 0 && <div className="catalogue-empty"><h3>No matching products</h3><p>Try another name or composition, or clear your filters.</p><button className="text-link" onClick={()=>{setQuery("");setCategory("");setSource("");}}>Clear filters</button></div>}
    <p className="catalogue-note">Reference catalogue: brands and published specifications are attributed to Neomedix Healthcare and Raymed. Listing does not imply manufacture by Rivixa. Product selection and use require professional advice.</p>
  </section>;
}
