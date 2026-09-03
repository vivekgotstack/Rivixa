"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Mail, Menu } from "lucide-react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { company, specialties } from "@/lib/site";
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <i />A healthier tomorrow begins with care.
          </span>
          <a href={`mailto:${company.email}`}>
            <Mail size={13} />
            {company.email}
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav aria-label="Main navigation" className="desktop-nav">
            <Link
              className={pathname === "/" ? "active" : ""}
              aria-current={pathname === "/" ? "page" : undefined}
              href="/"
            >
              Home
            </Link>
            <Link
              className={pathname === "/about" ? "active" : ""}
              aria-current={pathname === "/about" ? "page" : undefined}
              href="/about"
            >
              About us
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`nav-dropdown ${pathname.startsWith("/therapeutic-areas") ? "active" : ""}`}
                >
                  Therapeutic areas
                  <ChevronDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 p-2">
                <DropdownMenuItem asChild>
                  <Link href="/therapeutic-areas" className="py-3">
                    Explore all areas
                    <ArrowUpRight className="ml-auto" />
                  </Link>
                </DropdownMenuItem>
                {specialties.map((s) => (
                  <DropdownMenuItem key={s.slug} asChild>
                    <Link
                      href={`/therapeutic-areas/${s.slug}`}
                      className="py-3"
                    >
                      {s.name}
                      <ArrowUpRight className="ml-auto" />
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/#our-commitment">Our commitment</Link>
          </nav>
          <Button asChild className="header-contact">
            <Link href="/contact">
              Let’s connect
              <ArrowUpRight size={16} />
            </Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="mobile-menu"
                aria-label="Open navigation"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="mobile-panel">
              <SheetTitle className="text-xl">Explore Rivixa</SheetTitle>
              <SheetDescription>
                Science with purpose. Care with heart.
              </SheetDescription>
              <nav aria-label="Mobile navigation">
                {[
                  ["/", "Home"],
                  ["/about", "About us"],
                  ["/therapeutic-areas", "Therapeutic areas"],
                  ...specialties.map((s) => [
                    `/therapeutic-areas/${s.slug}`,
                    s.name,
                  ]),
                  ["/#our-commitment", "Our commitment"],
                  ["/contact", "Contact us"],
                ].map(([href, label]) => (
                  <Link key={href} href={href} onClick={() => setOpen(false)}>
                    {label}
                    <ArrowUpRight size={16} />
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
