import { Background } from '@/components/Background';
import { ScrollProgress } from '@/components/ScrollProgress';
import { PageLoader } from '@/components/PageLoader';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import Cursor from './components/ui/cursor/Cursor';

export default function App() {
  return (
    <>
      <Cursor />
      <PageLoader />
      <Background />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
