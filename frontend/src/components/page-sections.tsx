import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/site-sections";
import { articles } from "@/lib/resources";

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description: string }) {
  return <section className="page-intro"><div className="container"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{description}</p></div></section>;
}

export function FeatureGrid({ items }: { items: { title: string; description: string; href?: string; label?: string }[] }) {
  return <div className="content-card-grid">{items.map((item, index) => <article className="content-card" key={item.title}><span className="content-number">{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.description}</p>{item.href && <Link className="text-link" href={item.href}>{item.label || "Find out more"}<ArrowUpRight size={15} /></Link>}</article>)}</div>;
}

export function Faqs({ items, title = "A few useful answers." }: { items: { question: string; answer: string }[]; title?: string }) {
  return <section className="faq-section"><div><Eyebrow>GOOD TO KNOW</Eyebrow><h2>{title}</h2></div><div className="faq-list">{items.map(item => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></section>;
}

export function NextStep({ title, description, href, label }: { title: string; description: string; href: string; label: string }) {
  return <div className="next-step"><div><h2>{title}</h2><p>{description}</p></div><Link className="text-link" href={href}>{label}<ArrowUpRight size={18} /></Link></div>;
}

export function ArticleCards({ exclude }: { exclude?: string } = {}) {
  return <div className="article-grid">{articles.filter(article => article.slug !== exclude).map(article => <article className="article-card" key={article.slug}><Link href={`/blogs/${article.slug}`} className="article-image" aria-label={`Read: ${article.title}`}><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 700px) 90vw, 33vw" /></Link><div className="article-card-body"><span className="small-label">{article.category}</span><h3><Link href={`/blogs/${article.slug}`}>{article.title}</Link></h3><p>{article.description}</p><Link href={`/blogs/${article.slug}`} className="text-link">Read article<ArrowUpRight size={16} /></Link></div></article>)}</div>;
}
