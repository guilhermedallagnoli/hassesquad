import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero_background');

  return (
    <section
      id="home"
      className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-white bg-cover bg-top bg-background"
      style={{
        backgroundImage: `url('${heroImage?.imageUrl}')`,
      }}
      data-ai-hint={heroImage?.imageHint}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto text-center flex flex-col items-center relative">
        <h1 className="text-2xl md:text-4xl font-thin tracking-tighter mb-4 font-headline drop-shadow-lg">
          CONSTRUA SEU MELHOR FÍSICO!
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-8 drop-shadow-md font-light">
          Performance e resultado.
        </p>
        <div className="relative mt-8">
          <Link
            href="https://api.whatsapp.com/send?phone=554799672899"
            target="_blank"
          >
            <Button
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white font-thin text-base md:text-lg px-6 py-4 rounded-xl shadow-inner shadow-white/10 hover:shadow-white/20 border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              QUERO RESULTADO
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
