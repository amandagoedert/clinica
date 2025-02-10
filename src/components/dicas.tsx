import { Brain, Heart, Moon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Lista de recursos com dicas práticas
const features = [
  {
    title: "Saúde Mental",
    description: "Cuide da sua saúde mental com atendimento especializado e personalizado. A saúde mental é a base do bem-estar geral. Busque sempre o apoio adequado para enfrentar desafios emocionais.",
    icon: Brain,
    tip: "Dica: Realizar meditação diariamente pode ajudar a reduzir o estresse e melhorar sua saúde mental."
  },
  {
    title: "Bem-estar Emocional",
    description: "Desenvolva estratégias para lidar com ansiedade e estresse através de técnicas comprovadas como mindfulness e exercícios respiratórios.",
    icon: Heart,
    tip: "Dica: Pratique a gratidão todos os dias. Escreva 3 coisas pelas quais você é grato para melhorar o bem-estar emocional."
  },
  {
    title: "Qualidade de Vida",
    description: "Melhore seu sono e relaxamento com técnicas e exercícios específicos. A qualidade de vida é refletida no equilíbrio entre corpo e mente.",
    icon: Moon,
    tip: "Dica: Evite o uso de dispositivos eletrônicos antes de dormir para garantir um sono mais tranquilo e reparador."
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden" id="dicas">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold text-primary">Saúde Mental e Bem-estar</h2>
        </div>

        <div className="relative">
          {/* Decorative background */}
          <div className="absolute inset-0 flex justify-between -z-10">
            <div className="w-full h-full bg-gradient-to-r from-secondary/20 via-transparent to-secondary/20 rounded-[60px]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="bg-background-secondary border-none shadow-none hover:shadow-lg transition-shadow duration-300 rounded-xl"
              >
                <CardContent className="pt-8">
                  <div className="rounded-full bg-secondary/50 w-12 h-12 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-[#1b2c1d]" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                  <p className="text-primary/80 leading-relaxed mb-4">{feature.description}</p>
                  <div className="text-primary italic text-sm">{feature.tip}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
