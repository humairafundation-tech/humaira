import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { FocusCard } from "@/components/ui/FocusCard";
import { areas } from "@/content/areas";

export function AreasOfFocus() {
  return (
    <Section id="focus" tone="cream" className="pt-28 lg:pt-36">
      <Container className="max-w-[1164px]">
        <Eyebrow content={areas.eyebrow} />
        <h2 className="sr-only">Areas of focus</h2>

        <div className="mt-6 grid gap-[18px] lg:grid-cols-3">
          {areas.items.map((item) => (
            <FocusCard key={item.number} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
