import MissionStatement from "@/components/about/MissionStatement";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import CoreValues from "@/components/about/CoreValues";
import BridgePhilosophy from "@/components/about/BridgePhilosophy";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <MissionStatement />
      <JourneyTimeline />
      <CoreValues />
      <BridgePhilosophy />
    </main>
  );
}