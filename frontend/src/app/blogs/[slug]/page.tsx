import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ChevronRight } from "lucide-react";
import { ArticleCards, NextStep } from "@/components/page-sections";
import { Eyebrow } from "@/components/site-sections";
import { articles } from "@/lib/resources";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((entry) => entry.slug === slug);
  return article ? { title: article.title, description: article.description } : { title: "Article" };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((entry) => entry.slug === slug);
  if (!article) notFound();
  return <main id="main-content">
    <nav aria-label="Breadcrumb" className="container breadcrumbs"><Link href="/">Home</Link><ChevronRight size={12} /><Link href="/blogs">Blogs</Link><ChevronRight size={12} /><span>{article.category}</span></nav>
    <header className="article-header container"><Eyebrow>{article.category}</Eyebrow><h1>{article.title}</h1><p>{article.description}</p></header>
    <div className="article-hero container"><Image src={article.image} alt={article.imageAlt} fill priority sizes="(max-width: 700px) 92vw, 1000px" /></div>
    <article className="article-readable container"><div className="article-reading-copy">{article.sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
      <section className="article-checklist"><h2>A helpful checklist</h2><ul>{article.checklist.map((item) => <li key={item}>{item}</li>)}</ul></section>
    </div></article>
    <section className="article-contact container"><Link href="/blogs" className="text-link"><ArrowLeft size={16} />Back to all articles</Link><Link href={`/contact?area=${article.contactArea}`} className="text-link">Continue the conversation<ArrowUpRight size={16} /></Link></section>
    <section className="section-pad section-tint"><div className="container"><Eyebrow>MORE FROM RIVIXA</Eyebrow><h2 className="related-heading">Keep exploring.</h2><ArticleCards exclude={article.slug} /></div></section>
    <section className="section-pad"><div className="container"><NextStep title="A question for the team?" description="Share the exact product or subject you are asking about, and the details you would like clarified." href={`/contact?area=${article.contactArea}`} label="Contact Rivixa" /></div></section>
  </main>;
}
