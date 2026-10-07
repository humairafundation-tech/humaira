import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export default function HowWeWork() {
  const { howWeWork } = site;
  return (
    <Section tone="sage">
      <Container className="max-w-[1164px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_30rem] lg:gap-x-12">
          <div>
            <Eyebrow content={howWeWork.eyebrow} />
            <h2 className="mt-6 font-serif text-[2.5rem] leading-[1.1] tracking-[-0.03em] md:text-5xl lg:text-[3.5rem]">
              {howWeWork.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>

          <p className="max-w-[40rem] text-lg leading-[1.75] lg:pt-5">
            {howWeWork.text}
          </p>
        </div>
      </Container>
    </Section>
  );
}
