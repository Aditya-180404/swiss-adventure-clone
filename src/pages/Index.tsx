import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { DestinationsSection } from '@/components/DestinationsSection';
import { ExperiencesSection } from '@/components/ExperiencesSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DestinationsSection />
      <ExperiencesSection />
      <Footer />
    </div>
  );
};

export default Index;