import React from "react";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

// future project updates will be added
// Mock updates for styling purposes
const updates = [
  //   {
  //     title: "Community listening sessions",
  //     date: "October 2026",
  //     text: "Mock update: a first round of conversations with local harvesters and families to understand which needs matter most.",
  //   },
  //   {
  //     title: "School supplies pilot",
  //     date: "November 2026",
  //     text: "Mock update: a small pilot to provide learning materials for children in one partner community.",
  //   },
  //   {
  //     title: "Tree planting day",
  //     date: "December 2026",
  //     text: "Mock update: a community-led planting day to help restore the landscape around a harvesting area.",
  //   },
];

export function ImpactUpdates() {
  const { impact } = site;

  return (
    <Section id="impact" tone="cream">
      <Container className="max-w-[1164px]">
        <div className="grid gap-6 lg:grid-cols-[20.625rem_1fr] lg:gap-x-[4.8rem]">
          <div>
            <Eyebrow conntent={impact.eyebrow} />
            <h2 className="mt-6 font-serif text-[2.375rem] leading-[1.1] tracking-[-0.03em] md:text-5xl lg:text-[3.375rem]">
              {impact.title}
            </h2>
          </div>

          <p className="max-w-[40rem] text-lg leading-[1.8] lg:pt-8">
            {impact.text}
          </p>
        </div>

        <div className="mt-14">
          {updates.length === 0 ? (
            <div className="grid gap-4 border border-line px-8 py-10 lg:grid-cols-2 lg:gap-x-20 lg:px-11">
              <h3 className="font-serif text-[1.75rem] leading-[1.2]">
                {impact.empty.title}
              </h3>
              <p className="text-[15px] leading-7 text-muted">
                {impact.empty.text}
              </p>
            </div>
          ) : (
            <ul className="grid gap-[18px] lg:grid-cols-3">
              {updates.map((update) => (
                <li
                  key={update.title}
                  className="border-t-[3px] border-gold-line bg-white px-9 pb-9 pt-8"
                >
                  <p className="font-serif text-[15px] text-gold-label">
                    {update.date}
                  </p>
                  <h3 className="mt-4 font-serif text-[26px] leading-[30px]">
                    {update.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-muted">
                    {update.text}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </Section>
  );
}

export default ImpactUpdates;
