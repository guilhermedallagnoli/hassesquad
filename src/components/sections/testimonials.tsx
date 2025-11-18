'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MarqueeBanner } from '@/components/sections/marquee-banner';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

function TestimonialKaue() {
  const photo1 = PlaceHolderImages.find((p) => p.id === 'testimonial_kaue_1');
  const photo2 = PlaceHolderImages.find((p) => p.id === 'testimonial_kaue_2');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 4000); // Alterna a cada 4 segundos

    return () => clearInterval(interval);
  }, []);


  return (
    <div
      className="bg-grid-pattern text-white"
    >
      <div className="pt-16 md:pt-24" />
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="relative flex flex-row items-center justify-center gap-4 md:gap-8 mb-12 h-[300px] sm:h-[450px]">
            {photo1 && (
              <div
                className={cn(
                  'w-[150px] h-[210px] sm:w-[250px] sm:h-[350px] relative overflow-hidden shadow-lg border-[3px] border-white rounded-2xl transition-all duration-700 ease-in-out',
                  activeIndex === 0
                    ? 'transform scale-105 opacity-100 z-10'
                    : 'transform scale-95 opacity-70 z-0'
                )}
              >
                <Image
                  src={photo1.imageUrl}
                  alt={photo1.description}
                  fill
                  className="object-cover object-top sm:object-center rounded-xl"
                  data-ai-hint={photo1.imageHint}
                />
              </div>
            )}
            {photo2 && (
              <div
                className={cn(
                  'w-[150px] h-[210px] sm:w-[250px] sm:h-[350px] relative overflow-hidden shadow-lg border-[3px] border-white rounded-2xl transition-all duration-700 ease-in-out',
                  activeIndex === 1
                    ? 'transform scale-105 opacity-100 z-10'
                    : 'transform scale-95 opacity-70 z-0'
                )}
              >
                <Image
                  src={photo2.imageUrl}
                  alt={photo2.description}
                  fill
                  className="object-cover object-top sm:object-center rounded-xl"
                  data-ai-hint={photo2.imageHint}
                />
              </div>
            )}
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-primary font-light mb-2">Vivo o que prego!</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6 font-headline uppercase">
              KAUÊ HASSE
            </h2>
            <div className="text-lg text-muted-foreground space-y-4 font-light">
              <p>
                Sou atleta amador de fisiculturismo e maromba raiz, com mais de 10
                anos de prática no treino e 3 anos atuando como consultor
                esportivo.
              </p>
              <p>
                Já segui muita dica furada, que só me fez perder tempo e resultado.
                Foi daí que nasceu meu compromisso: mostrar um caminho mais
                inteligente e realista.
              </p>
            </div>
            <div className="relative mt-12">
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
      </div>
      <div className="mt-16 md:mt-24">
        <MarqueeBanner />
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: 'FABRÍCIO ISRAEL',
    profileImage: '/testimonials/fabricio.jpeg',
    testimonialImage: '/testimonials/fabricio_conversa.jpeg',
  },
  {
    name: 'GREGORY',
    profileImage: '/testimonials/gregory.jpeg',
    testimonialImage: '/testimonials/gregori_conversa.jpeg',
  },
  {
    name: 'GUSTAVO MAAS',
    profileImage: '/testimonials/gustavo.jpeg',
    testimonialImage: '/testimonials/gustavo_conversa.jpeg',
  },
  {
    name: 'NEMERSSON',
    profileImage: '/testimonials/nemersson.jpeg',
    testimonialImage: '/testimonials/nemerson_conversa.jpeg',
  },
];

function TestimonialMain() {
  return (
    <div
      className="bg-background text-white py-16 md:py-24"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, transparent, #000), url("https://assets.website-files.com/6425c21e54c0e14517351603/642c22277e382d56a7f058d9_Background.svg")',
        backgroundPosition: 'center, 50% 0',
        backgroundRepeat: 'no-repeat, repeat',
        backgroundSize: '1200px 1000px, auto',
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-lg w-full mx-auto">
            <p className="text-primary font-light mb-2">Feedbacks</p>
            <h2 className="text-4xl md:text-5xl font-light font-headline mb-12">
              O QUE O TIME FALA?
            </h2>
          </div>

          <Carousel
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-lg"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => {
                return (
                  <CarouselItem key={index} className="flex justify-center">
                    <div className="w-full max-w-lg bg-neutral-800/20 border border-white/10 rounded-3xl p-6 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] mx-auto">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                        <div className="p-4 bg-black/30 rounded-2xl border border-white/5">
                          <div className="flex items-center gap-4 mb-6">
                              <Image
                                src={testimonial.profileImage}
                                alt={`Foto de perfil do depoimento de ${testimonial.name}`}
                                width={48}
                                height={48}
                                className="rounded-full object-cover border-2 border-white/20"
                              />
                            <h3 className="text-2xl font-light font-headline">
                              {testimonial.name}
                            </h3>
                          </div>
                            <Image
                              src={testimonial.testimonialImage}
                              alt={`Imagem do depoimento em texto de ${testimonial.name} (print do WhatsApp)`}
                              width={300}
                              height={200}
                              className="rounded-lg w-full h-auto"
                            />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>

          <div className="mt-24 max-w-2xl w-full mx-auto">
            <p className="text-primary font-light mb-2">ENTRE EM CONTATO</p>
            <h2 className="text-4xl md:text-5xl font-light font-headline mb-4">
              SUA EVOLUÇÃO COMEÇA AGORA.
            </h2>
            <p className="text-muted-foreground text-lg mb-2 font-light">
              Com um acompanhamento de verdade e estratégia bem feita, você terá
              resultado.
            </p>
            <p className="text-muted-foreground text-lg mb-8 font-light">
              O próximo passo depende só de você.
            </p>
            <Link
              href="https://api.whatsapp.com/send?phone=554799672899"
              target="_blank"
            >
              <Button className="bg-neutral-900 border-2 border-neutral-700 text-white font-light text-lg px-10 py-7 rounded-xl shadow-[0_0_20px_hsl(var(--primary))] hover:bg-neutral-800 hover:border-neutral-600 transition-all duration-300 transform hover:scale-105 animate-pulse duration-[3s]">
                COMEÇAR MEU PLANO
              </Button>
            </Link>
            <p className="text-muted-foreground mt-4 font-light">
              Atendimento online para todo o Brasil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-background">
      <TestimonialKaue />
      <TestimonialMain />
    </section>
  );
}
