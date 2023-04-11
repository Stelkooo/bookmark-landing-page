import Hero from './components/hero/hero.components';
import Features from './components/features/features.component';
import FAQ from './components/faq/faq.component';

export default function Main() {
  return (
    <main className="mx-8 flex flex-col gap-[140px]">
      <Hero />
      <Features />
      <FAQ />
    </main>
  );
}
