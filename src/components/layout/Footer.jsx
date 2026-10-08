import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Footer() {
  const { footer } = site;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pb-12 pt-14 text-white lg:pb-14 lg:pt-16">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div>
            <p className="font-serif text-2xl">{footer.name}</p>
            <p className="mt-4 max-w-[30rem] text-base leading-7 text-ink-soft">
              {footer.tagline}
            </p>
          </div>

          <p className="text-[13px] text-ink-muted">
            © {year} {footer.name} · {footer.legal}
          </p>
        </div>
      </Container>
    </footer>
  );
}
