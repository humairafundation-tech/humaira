import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

function Header() {
  return (
    <header className="relative bg-ink text-white">
      <Container>
        <div className="flex items-center justify-between pt-6 pb-5.5 lg:py-6">
          <div className="text-2xl tracking-tight flex flex-col w-full gap-4  md:flex-row md:justify-between md:items-center lg:py-1.5">
            <Link href="/" className="w-fit">
              <h1 className="font-serif text-[23px]">
                Humaira <span className="text-gold">Foundation</span>
              </h1>
            </Link>
            <nav
              aria-label="Main navigation"
              className="gap-5.5  text-sm flex flex-row flex-wrap tracking-tight md:tracking-wide lg:gap-6 lg:text-[15px]"
            >
              {site.nav.map((item) => {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
        <hr className="h-[0.1px] opacity-20  bg-ink-line w-full" />
      </Container>
    </header>
  );
}

export default Header;
