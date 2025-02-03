import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}
