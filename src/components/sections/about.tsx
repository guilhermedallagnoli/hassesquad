import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const imageIds = [
  'about_progress_1',
  'about_progress_2',
  'about_progress_3',
  'about_progress_4',
];

export function About() {
  const progressImages = imageIds.map((id) =>
    PlaceHolderImages.find((p) => p.id === id)
  );

  return (
    <section
      id="sobre"
      className="bg-grid-pattern text-white"
    >
      <div className="container mx-auto py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 px-8 md:px-0 md:pl-[70px]">
          {progressImages.map(
            (img) =>
              img && (
                <div
                  key={img.id}
                  className="aspect-[3/4] relative animate-subtle-pulse"
                >
                  <Image
                    src={img.imageUrl}
                    alt={img.description}
                    fill
                    className="rounded-2xl shadow-lg object-cover"
                    data-ai-hint={img.imageHint}
                  />
                </div>
              )
          )}
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline uppercase">
            MUDAR PARA SEMPRE.
          </h2>
          <p className="text-lg text-muted-foreground">
            Essas são apenas algumas das mudanças físicas e mentais que{' '}
            <strong className="text-foreground">construímos juntos.</strong>
          </p>
          <br />
          <p className="text-lg text-muted-foreground">
            Seja ganhar massa magra, perder gordura ou simplesmente criar uma
            rotina saudável e sustentável.
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
      </div>
    </section>
  );
}
