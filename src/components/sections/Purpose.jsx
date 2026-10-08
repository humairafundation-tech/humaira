import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Purpose() {
  const { purpose } = site;

  return (
    <Section id="purpose" tone="cream" className="pb-0">
      <Container className="max-w-[1164px]">
        <div className="grid gap-6 lg:grid-cols-[20.625rem_1fr] lg:gap-x-[4.8rem]">
          <div>
            <Eyebrow content={purpose.eyebrow} />
            <h2 className="mt-6 font-serif text-[2.375rem] leading-[1.1] tracking-[-0.03em] md:text-5xl lg:text-[3.575rem]">
              {purpose.title}
            </h2>
          </div>

          <p className="max-w-[40rem] text-lg leading-[1.8] lg:pt-9">
            {purpose.text}
          </p>
        </div>
      </Container>
    </Section>
  );
}
