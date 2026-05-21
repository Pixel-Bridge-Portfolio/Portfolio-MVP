
import HeroSection from "@/components/home/HeroSection";
import SkillCarousel from "@/components/home/SkillCarousel";
import StatsBar from "@/components/home/StatsBar";
import FeaturedWorkGrid from "@/components/home/FeaturedWorkGrid";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SkillCarousel />
      <StatsBar />
      <FeaturedWorkGrid />
    </main>
  );
}