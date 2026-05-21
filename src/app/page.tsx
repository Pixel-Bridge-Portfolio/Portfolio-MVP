import HeroSection from "@/components/home/HeroSection";
import SkillCarousel from "@/components/home/SkillCarousel";
import StatsBar from "@/components/home/StatsBar";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsBar />
      <SkillCarousel />
      {/* <FeaturedWorkGrid /> */}
    </main>
  );
}
