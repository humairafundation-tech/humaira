import React from "react";
import { cn } from "@/lib/cn";

const tones = {
  cream: "bg-cream text-ink-text",
  sage: "bg-sage text-ink-text",
  white: "bg-white text-ink-text",
  dark: "bg-ink text-white",
};

function Section({ id, tone = "cream", className, children }) {
  return (
    <section id={id} className={cn("py-24", tones[tone], className)}>
      {children}
    </section>
  );
}

export default Section;
