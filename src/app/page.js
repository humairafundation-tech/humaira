import { Purpose } from "@/components/sections/Purpose";
import { AreasOfFocus } from "@/components/sections/AreasOfFocus";
import HowWeWork from "@/components/sections/HowWeWork";
import { LeadershipMessages } from "@/components/sections/LeadershipMessages";
import { ImpactUpdates } from "@/components/sections/ImpactUpdates";
export default function Home() {
  return (
    <>
      <Purpose />
      <AreasOfFocus />
      <HowWeWork />
      <LeadershipMessages/>
      <ImpactUpdates/>
    </>
  );
}
