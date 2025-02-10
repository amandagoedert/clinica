import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-secondary/20" id="inicio">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-primary">
              Construa o futuro, que você merece!
            </h1>
            <p className="text-lg text-primary/80">
              Atendimento psicológico personalizado e acolhedor para oferece as ferramentas necessárias para transformar suas emoções e alcançar seus objetivos pessoais e emocionais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Botão "Agende sua Consulta" com link para WhatsApp */}
              <Button
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://wa.me/5545991244303"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agende sua Consulta
                </a>
              </Button>
              {/* Botão "Saiba Mais" com link para WhatsApp */}
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://wa.me/5545991244303"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saiba Mais
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            {/* Círculo rosa */}
            <div className="w-full aspect-square bg-primary rounded-full animate-float" />
            
            {/* Imagem circular */}
            <img
              src="/imagem.png" // Substitua pelo caminho da sua imagem
              alt="Descrição da imagem"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
