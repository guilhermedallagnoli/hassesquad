import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Dumbbell, UtensilsCrossed, MessageSquareText, Target, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const consultancyFeatures = [
  {
    icon: <Dumbbell className="w-10 h-10 text-primary" />,
    title: 'ACOMPANHAMENTO REAL',
    description: 'Acompanhamento contínuo, com ajustes feitos conforme sua evolução e rotina. Nossa equipe adapta a estratégia ao seu dia a dia, garantindo progresso real e sustentável.',
  },
  {
    icon: <UtensilsCrossed className="w-10 h-10 text-primary" />,
    title: 'PLANO ALIMENTAR',
    description: 'Estratégia nutricional feita sob medida para o seu dia a dia, considerando trabalho, compromissos familiares e preferências pessoais. Prático, objetivo e possível de seguir.',
  },
  {
    icon: <Target className="w-10 h-10 text-primary" />,
    title: 'TREINOS PERSONALIZADOS',
    description: 'Treinos voltados para hipertrofia e força adaptados ao seu nível, disponibilidade e histórico. Pensados para otimizar seus ganhos.',
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: 'APLICATIVO INTERATIVO',
    description: 'Acesso ao seu plano alimentar e de treino direto do celular, você registra as refeições do dia a dia e tambem seus treinos e cargas, tb conta com videos explicativos para cada exercicio.',
  },
  {
    icon: <MessageSquareText className="w-10 h-10 text-primary" />,
    title: 'SUPORTE NO WHATSAPP',
    description: 'Acesso direto ao meu WhatsApp, disponível 100% para dúvidas, orientações e ajustes sempre que precisar.',
  },
];

export function Consultancy() {
  return (
    <section
      id="consultoria"
      className="relative py-16 md:py-24 bg-grid-pattern text-white"
    >
      <div className="container mx-auto">
        <div>
          <div className="flex justify-center mb-12">
            <Link
              href="https://api.whatsapp.com/send?phone=554799672899"
              target="_blank"
              className="bg-primary text-primary-foreground font-bold uppercase tracking-wider px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              Consultoria
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 justify-center sm:px-5">
            {consultancyFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-card/50 border-white/10 text-center flex flex-col items-center p-5 shadow-lg hover:border-primary/50 hover:bg-card/70 transition-all duration-300 max-w-xs mx-auto"
              >
                <CardHeader className="p-0 mb-4">{feature.icon}</CardHeader>
                <CardContent className="p-0 flex flex-col items-center">
                  <CardTitle className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="relative mt-12 text-center">
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
            <div className="mt-12 px-5">
              <div className="border-b border-white/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
