import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Gallery } from '@/components/gallery';
import { Experience } from '@/components/experience';
import { Education } from '@/components/education';
import { Skills } from '@/components/skills';
import { References } from '@/components/references';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Gallery />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
