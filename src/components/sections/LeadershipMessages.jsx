import Section from "@/components/ui/Section";
import { MessageBlock } from "@/components/ui/MessageBlock";
import { leadership } from "@/content/leadership";

export function LeadershipMessages() {
  return (
    <>
      <Section id="leadership" tone="white">
        <MessageBlock {...leadership.ceo} />
      </Section>
      <Section tone="sage">
        <MessageBlock {...leadership.coo} rule="sage" />
      </Section>
    </>
  );
}
