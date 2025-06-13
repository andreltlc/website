import Image from "next/image";
import Hero from "./components/Hero.jsx";
import ProjectsSection from './components/ProjectsSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />
        <ProjectsSection />
        <AboutSection />
         <ServicesSection />
      </main>
      
    </div>
  );
}
