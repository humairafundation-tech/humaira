import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import Button from "@/components/ui/Button.jsx";
import Eyebrow from "@/components/ui/Eyebrow.jsx";
import { site } from "@/content/site";

function Header() {
  const { hero } = site;
  return (
    <header className="relative bg-ink text-white">
      <Container>
        {/* Header & Nav */}
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

        {/*  Hero Content */}
        <section className="flex flex-col pt-18 pb-20 justify-start md:justify-between md:gap-x-15 md:flex-row md:pt-24 md:pb-28">
          <div>
            <Eyebrow content={hero.eyebrow} />

            <h1 className="mt-5 mb-6 max-w-xl font-serif text-[clamp(3rem,7vw,6.25rem)] leading-[1.05] tracking-[-0.03em]">
              {hero.titleLead} <em className="text-gold">{hero.titleAccent}</em>
            </h1>

            <p className=" mb-8.5 max-w-145 md:max-w-136 text-xl leading-8 text-ink-soft md:text-xl">
              {hero.text}
            </p>

            <Button
              href={hero.cta.href}
              label={hero.cta.label}
              className="mt-9"
            />
          </div>
          <aside className="max-w-82.5 flex-1/2 md:place-self-end border-t border-gold pt-6 mt-16 lg:mr-6">
            <strong className="text-[16px] font-bold">{hero.note.title}</strong>
            <p className="mt-3 text-[16px] leading-7 text-ink-soft">
              {hero.note.text}
            </p>
          </aside>
        </section>
      </Container>
    </header>
  );
}

export default Header;
