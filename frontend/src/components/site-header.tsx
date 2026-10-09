"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Mail, Menu } from "lucide-react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import {
  Sheet, SheetContent, SheetTitle, SheetTrigger, SheetDescription,
} from "@/components/ui/sheet";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
  DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { company } from "@/lib/site";
import { companyLinks, productLinks, sectionLinks } from "@/lib/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const currentPath = pathname.replace(/\/$/, "") || "/";
  const inProducts = currentPath.startsWith("/products") || currentPath.startsWith("/therapeutic-areas");
  const inOptions = inProducts || [...companyLinks, ...sectionLinks].some(({ href }) => href !== "/" && currentPath === href);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><i />Pharmaceutical care. With people at its heart.</span>
          <a href={`mailto:${company.email}`}>
            <Mail size={13} />{company.email}<ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav aria-label="Main navigation" className="desktop-nav">
            <Link href="/" className={currentPath === "/" ? "active" : ""} aria-current={currentPath === "/" ? "page" : undefined}>Home</Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={`nav-dropdown ${inOptions ? "active" : ""}`}>
                  Options<ChevronDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 p-2">
                {companyLinks.filter(({ href }) => href !== "/").map(({ href, label }) => (
                  <DropdownMenuItem key={href} asChild>
                    <Link href={href} className="py-3" aria-current={currentPath === href ? "page" : undefined}>{label}<ArrowUpRight className="ml-auto" /></Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="py-3">Products</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="w-64 p-2" sideOffset={8}>
                      <DropdownMenuItem asChild>
                        <Link href="/products" className="py-3">All products<ArrowUpRight className="ml-auto" /></Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {productLinks.map(({ href, label }) => (
                        <DropdownMenuItem key={href} asChild>
                          <Link href={href} className="py-3" aria-current={currentPath === href ? "page" : undefined}>
                            {label}<ArrowUpRight className="ml-auto" />
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                {sectionLinks.map(({ href, label }) => (
                  <DropdownMenuItem key={href} asChild>
                    <Link href={href} className="py-3" aria-current={currentPath === href ? "page" : undefined}>{label}<ArrowUpRight className="ml-auto" /></Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <Button asChild className="header-contact">
            <Link href="/contact">Contact Us<ArrowUpRight size={16} /></Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="mobile-menu" aria-label="Open navigation"><Menu /></Button>
            </SheetTrigger>
            <SheetContent className="mobile-panel">
              <SheetTitle className="text-xl">Explore Rivixa</SheetTitle>
              <SheetDescription>Science with purpose. Care with heart.</SheetDescription>
              <nav aria-label="Mobile navigation">
                <Link href="/" onClick={() => setOpen(false)} aria-current={currentPath === "/" ? "page" : undefined}>Home<ArrowUpRight size={16} /></Link>
                <details className={`mobile-options ${inOptions ? "active" : ""}`}>
                  <summary>Options<ChevronDown size={18} /></summary>
                  <div className="mobile-product-links">
                    <Link href="/about" onClick={() => setOpen(false)} aria-current={currentPath === "/about" ? "page" : undefined}>
                      About Us<ArrowUpRight size={15} />
                    </Link>
                    <details className={`mobile-products ${inProducts ? "active" : ""}`}>
                      <summary>Products<ChevronDown size={16} /></summary>
                      <div className="mobile-category-links">
                        {[{ href: "/products", label: "All products" }, ...productLinks].map(({ href, label }) => (
                          <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={currentPath === href ? "page" : undefined}>
                            {label}<ArrowUpRight size={15} />
                          </Link>
                        ))}
                      </div>
                    </details>
                    {sectionLinks.map(({ href, label }) => (
                      <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={currentPath === href ? "page" : undefined}>{label}<ArrowUpRight size={15} /></Link>
                    ))}
                  </div>
                </details>
                <Link href="/contact" onClick={() => setOpen(false)} aria-current={currentPath === "/contact" ? "page" : undefined}>Contact Us<ArrowUpRight size={16} /></Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
