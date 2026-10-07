import Eyebrow from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const rules = {
  gold: "border-gold-line",
  sage: "border-sage-rule",
};

export function MessageBlock({
  eyebrow,
  title,
  paragraphs,
  name,
  role,
  rule = "gold",
}) {
  return (
    <Container className="max-w-[1164px]">
      <div className="grid gap-8 lg:grid-cols-[22rem_1fr]">
        {/* eyebrow + heading -> left*/}
        <div>
          <Eyebrow content={eyebrow} />
          <h2 className="mt-6 font-serif text-[2.25rem] leading-[1.15] tracking-[-0.03em] md:text-5xl lg:text-[3.5rem] lg:leading-[1.2]">
            {title}
          </h2>
        </div>

        {/* message with vertical rule -> right */}
        <div className={cn("border-l-[3px] pb-1 pl-6 lg:pl-9", rules[rule])}>
          <div className="max-w-[39rem] space-y-5.5 font-serif text-lg leading-[1.7] lg:text-xl lg:leading-[1.85]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 text-sm">
            <p className="font-bold">{name}</p>
            <p className="text-muted">{role}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
