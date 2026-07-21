import Hero from '../Components/Hero';
import Experience from '../Components/Experience';
import SkillsBento from '../Components/SkillsBento';
import Navbar from '../Components/Navbar';
import ContactFooter from '../Components/ContactFooter';
import AiAssistant from '../Components/AiAssistant';
import AiBannerCTA from '../Components/AiBannerCTA'; // Nuevo Banner CTA

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-blue-500 selection:text-white relative">
      <Navbar />
      <Hero />
      <Experience />
      <SkillsBento />
      <AiBannerCTA />
      <ContactFooter />

      {/* Widget Flotante del Asistente de IA */}
      <AiAssistant />
    </main>
  );
}
