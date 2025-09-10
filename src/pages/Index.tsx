import { Navigation, Footer } from '@/components/LayoutComponents';
import { 
  HeroSection, 
  AboutSection, 
  SkillsSection, 
  ProjectsSection, 
  ExperienceSection, 
  ContactSection 
} from '@/components/PortfolioSections';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
