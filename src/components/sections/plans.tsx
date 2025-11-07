import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';

const plansData = [
  {
    title: 'Plano Básico',
    price: 'R$99',
    features: [
      'Avaliação física inicial',
      'Treino personalizado mensal',
      'Suporte via e-mail',
    ],
  },
  {
    title: 'Plano Pro',
    price: 'R$149',
    features: [
      'Tudo do Plano Básico',
      'Ajustes semanais no treino',
      'Guia nutricional',
      'Suporte via WhatsApp',
    ],
    popular: true,
  },
  {
    title: 'Plano Premium',
    price: 'R$199',
    features: [
      'Tudo do Plano Pro',
      'Chamadas de vídeo quinzenais',
      'Acompanhamento 24/7',
    ],
  },
];

export function Plans() {
  const whatsappSupportImage = PlaceHolderImages.find(
    (p) => p.id === 'whatsapp_support_placeholder'
  );
  const appImage = PlaceHolderImages.find(
    (p) => p.id === 'app_interactive_placeholder'
  );

  return (
    <section id="planos" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">
            O QUE VOCÊ RECEBE
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha o plano ideal para você e comece sua transformação hoje
            mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plansData.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col rounded-2xl shadow-lg transition-all hover:shadow-2xl hover:scale-105 ${
                plan.popular ? 'border-primary border-2 shadow-primary/20' : ''
              }`}
            >
              <CardHeader className="text-center">
                {plan.popular && (
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>
                )}
                <CardTitle className="text-2xl font-bold mt-4">
                  {plan.title}
                </CardTitle>
                <CardDescription className="text-4xl font-extrabold text-primary pt-2">
                  {plan.price}
                  <span className="text-base font-medium text-muted-foreground">
                    /mês
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full font-bold text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Link
                    href="https://api.whatsapp.com/send?phone=554799672899"
                    target="_blank"
                  >
                    Assinar
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card className="grid md:grid-cols-2 items-center gap-8 p-8 md:p-12 rounded-2xl shadow-xl overflow-hidden bg-card">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {whatsappSupportImage && (
              <Image
                src={whatsappSupportImage.imageUrl}
                alt={whatsappSupportImage.description}
                width={80}
                height={80}
                className="mb-4 rounded-full"
                data-ai-hint={whatsappSupportImage.imageHint}
              />
            )}
            <h3 className="text-2xl font-bold uppercase text-primary tracking-wider mb-2">
              Suporte no WhatsApp
            </h3>
            <p className="text-muted-foreground mb-6">
              Acesso direto ao meu WhatsApp, disponível 100% para dúvidas,
              orientações e ajustes sempre que precisar.
            </p>
            <Button
              asChild
              className="font-bold text-xl py-8 px-12 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
            >
              <Link
                href="https://api.whatsapp.com/send?phone=554799672899"
                target="_blank"
              >
                Tire suas dúvidas
              </Link>
            </Button>
          </div>
          <div className="flex justify-center">
            {appImage && (
              <Image
                src={appImage.imageUrl}
                alt={appImage.description}
                width={400}
                height={400}
                className="rounded-xl shadow-2xl"
                data-ai-hint={appImage.imageHint}
              />
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}
