import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Gallery } from '@/components/gallery';
import { ProverbGenerator } from '@/components/proverb-generator';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Gallery />
        <ProverbGenerator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
