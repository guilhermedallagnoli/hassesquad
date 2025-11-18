import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { Consultancy } from '@/components/sections/consultancy';
import { About } from '@/components/sections/about';
import { Testimonials } from '@/components/sections/testimonials';
import { Footer } from '@/components/sections/footer';
import { MarqueeBanner } from '@/components/sections/marquee-banner';
import { Logo } from '@/components/logo';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MarqueeBanner />
        <About />
        <div className="bg-black py-8 flex justify-center items-center">
          <Logo width={150} height={28} />
        </div>
        <Consultancy />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
