import { BookOpen, Brain, ClipboardCheck, Video } from "lucide-react";
import { Button } from "./ui/button";

const Services = () => {
  return (
    <section className="py-24 px-4 bg-[#1b2c1d]" id="servicos">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-[#d3712a] text-center mb-16">Especialidades da Equanimíté</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card de Atendimento Psicológico */}
          <div className="bg-[#2c3e2d] p-8 rounded-2xl card min-h-[380px]">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-secondary/50 p-3 rounded-xl">
                <BookOpen className="w-6 h-6 text-[#FFFFFF]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#d3712a]">Atendimento Psicológico</h3>
            </div>
            <p className="text-[#FFFFFF] mb-6 leading-relaxed">
              Oferecemos psicoterapia individual e para casais, com foco em promover o autoconhecimento, equilíbrio emocional e bem-estar psicológico. Utilizamos a Terapia Cognitivo-Comportamental (TCC) para tratar diversos transtornos emocionais, como depressão, ansiedade, transtornos alimentares e outros problemas emocionais. A terapia de casais tem como objetivo melhorar a comunicação, fortalecer o vínculo e ajudar na resolução de conflitos, visando a construção de relacionamentos mais saudáveis e harmoniosos.
            </p>
            <Button variant="secondary" className="w-full bg-[#FFFFFF] text-[#000000] hover:bg-[#333333] hover:text-white">Saiba mais</Button>
          </div>

          {/* Psicoterapia para Transtornos Psicopatológicos */}
          <div className="bg-[#2c3e2d] p-8 rounded-2xl card min-h-[380px]">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-secondary/50 p-3 rounded-xl">
                <Brain className="w-6 h-6 text-[#FFFFFF]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#d3712a]">Psicoterapia para Transtornos Psicopatológicos</h3>
            </div>
            <p className="text-[#FFFFFF] mb-6 leading-relaxed">
              A Terapia Cognitivo-Comportamental (TCC) é aplicada para tratar uma gama de transtornos psicopatológicos, como depressão, ansiedade, transtornos alimentares e outros distúrbios emocionais. O tratamento foca na redução dos sintomas, no restabelecimento do equilíbrio emocional e na reestruturação de pensamentos negativos. A TCC também é eficaz no tratamento de fobias, transtornos obsessivo-compulsivos (TOC), estresse pós-traumático (TEPT) e transtornos de personalidade. Cada tratamento é personalizado de acordo com as necessidades do paciente, garantindo um acompanhamento eficaz e direcionado.
            </p>
            <Button variant="secondary" className="w-full bg-[#FFFFFF] text-[#000000] hover:bg-[#333333] hover:text-white">Saiba mais</Button>
          </div>

          {/* Avaliação Psicológica */}
          <div className="bg-[#2c3e2d] p-8 rounded-2xl card min-h-[380px]">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-secondary/50 p-3 rounded-xl">
                <ClipboardCheck className="w-6 h-6 text-[#FFFFFF]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#d3712a]">Avaliação Psicológica</h3>
            </div>
            <p className="text-[#FFFFFF] mb-6 leading-relaxed">
              A avaliação psicológica oferece um olhar profundo sobre diferentes aspectos do comportamento e funcionamento emocional e cognitivo de uma pessoa. Realizamos o diagnóstico clínico de transtornos emocionais como depressão, ansiedade, transtornos de personalidade e outros, com o uso de ferramentas e técnicas padronizadas. Além disso, avaliamos funções cognitivas, como memória, atenção e raciocínio, essenciais para identificar dificuldades e fornecer intervenções adequadas. Também oferecemos avaliações profissionais para apoiar escolhas de carreira e processos seletivos, ajudando a identificar aptidões, interesses e personalidade para uma orientação mais assertiva no campo profissional.
            </p>
            <Button variant="secondary" className="w-full bg-[#FFFFFF] text-[#000000] hover:bg-[#333333] hover:text-white">Saiba mais</Button>
          </div>

          {/* Atendimento Online */}
          <div className="bg-[#2c3e2d] p-8 rounded-2xl card min-h-[380px]">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-secondary/50 p-3 rounded-xl">
                <Video className="w-6 h-6 text-[#FFFFFF]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#d3712a]">Atendimento Online</h3>
            </div>
            <p className="text-[#FFFFFF] mb-6 leading-relaxed">
              Nosso serviço de atendimento online proporciona sessões de psicoterapia via videoconferência, mantendo o mesmo nível de qualidade e eficácia do atendimento presencial. Através de uma plataforma segura e confidencial, as sessões oferecem flexibilidade para pacientes com rotinas mais intensas ou que não têm acesso fácil ao atendimento presencial. Este formato de atendimento é ideal para quem busca a conveniência de estar no conforto de sua casa, sem comprometer a privacidade ou a profundidade do tratamento. Garantimos que todas as sessões sejam realizadas em um ambiente seguro, proporcionando total conforto e apoio emocional.
            </p>
            <Button variant="secondary" className="w-full bg-[#FFFFFF] text-[#000000] hover:bg-[#333333] hover:text-white">Saiba mais</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

