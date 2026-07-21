import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import ImpactMetrics from '../Components/ImpactMetrics';
import StarCaseStudies from '../Components/StarCaseStudies';
import AiToolkitWorkflows from '../Components/AiToolkitWorkflows';
import Experience from '../Components/Experience';
import SkillsBento from '../Components/SkillsBento';
import ContactFooter from '../Components/ContactFooter';
import AiAssistant from '../Components/AiAssistant';
import AiBannerCTA from '../Components/AiBannerCTA';
import FloatingCTA from '../Components/FloatingCTA';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-blue-500 selection:text-white relative pb-20">
      <Navbar />
      <Hero />
      <ImpactMetrics />
      <StarCaseStudies />
      <AiToolkitWorkflows />
      <Experience />
      <SkillsBento />
      <AiBannerCTA />
      <ContactFooter />

      {/* Barra de CTA flotante y Asistente IA */}
      <FloatingCTA />
      <AiAssistant />
    </main>
  );
}
