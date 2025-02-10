import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Mudar meus pensamentos me permitiu transformar minha vida. A terapia me ajudou a encontrar novos caminhos.",
    author: "M, São Paulo",
  },
  {
    quote: "O acompanhamento psicológico me proporcionou uma conexão mais profunda comigo mesma, ajudando a lidar com pensamentos negativos.",
    author: "A, Rio de Janeiro",
  },
  {
    quote: "Aprendi a gerenciar minha ansiedade e encontrar mais equilíbrio no dia a dia. Sou muito grata pelo suporte recebido.",
    author: "C, Belo Horizonte",
  },
  {
    quote: "A terapia foi essencial para me ajudar a entender minhas emoções e ter uma vida mais equilibrada.",
    author: "L, Lisboa",
  },
  {
    quote: "Tive grande progresso com as ferramentas da terapia cognitivo-comportamental. Me sinto mais tranquila e focada.",
    author: "S, Buenos Aires",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-[#1b2c1d]" id="depoimentos">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#d3712a] mb-4">Histórias de Transformação</h2>
          <p className="text-[#ddb990]">Conheça algumas experiências de pessoas que passaram pela terapia</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-[#2f3e2e] text-white border-none shadow-none h-full rounded-xl">
                  <CardContent className="p-6">
                    {/* Alterando a cor do ícone de aspas para laranja */}
                    <Quote className="w-10 h-10 text-[#d3712a] mb-4 opacity-50" />
                    <blockquote className="text-white text-lg leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    {/* Mantendo a cor das letras e cidade como estava */}
                    <footer className="text-[#ddb990] font-medium">{testimonial.author}</footer>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
