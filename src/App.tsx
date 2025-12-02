import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { AnimatedBackground } from './components/AnimatedBackground';
import { FloatingNav } from './components/FloatingNav';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <AnimatedBackground />
      <FloatingNav />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
