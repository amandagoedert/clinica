import { BrainCircuit, HeartPulse } from "lucide-react";

const TCC = () => {
  return (
    <section className="py-24 px-4 bg-background" id="tcc">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-[#15645F] mb-12 text-center">
          Terapia Cognitivo Comportamental
        </h2>

        {/* Texto explicativo sobre a TCC dividido em duas colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <BrainCircuit className="w-12 h-12 text-[#15645F] mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">O que é a TCC?</h3>
            <p className="text-primary/80">
              A Terapia Cognitivo Comportamental (TCC) é uma abordagem terapêutica amplamente reconhecida por sua eficácia no tratamento de diversos transtornos emocionais. Ela se baseia na ideia de que nossos pensamentos, sentimentos e comportamentos estão interligados e, ao mudar a forma como pensamos, podemos mudar nossas emoções e comportamentos.
            </p>
            <p className="text-primary/80 mt-4">
              A TCC trabalha de forma prática e estruturada para ajudar as pessoas a identificarem padrões de pensamento negativos e limitantes, substituindo-os por pensamentos mais realistas e positivos. Isso é feito através de uma série de técnicas que visam promover mudanças duradouras no comportamento e nas emoções, tornando o paciente mais capaz de lidar com os desafios do dia a dia.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <HeartPulse className="w-12 h-12 text-[#15645F] mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-4">Benefícios da TCC</h3>
            <p className="text-primary/80">
              A TCC oferece uma série de benefícios para quem a adota. Através da identificação e reestruturação de padrões de pensamento negativos, ela pode ser uma ferramenta poderosa no tratamento de problemas como ansiedade, depressão, fobias e transtornos obsessivo-compulsivos (TOC). Além disso, a TCC ajuda a melhorar a autoestima, reduzir o estresse e desenvolver habilidades de enfrentamento para lidar com situações difíceis.
            </p>
            <p className="text-primary/80 mt-4">
              Os pacientes que praticam a TCC frequentemente relatam uma melhoria significativa no bem-estar emocional e uma maior sensação de controle sobre suas vidas. O enfoque na resolução de problemas e no enfrentamento de desafios reais também torna essa terapia altamente eficaz no longo prazo.
            </p>
          </div>
        </div>

        {/* Texto adicional explicando a abordagem e eficácia da TCC */}
        <div className="bg-white p-8 rounded-lg shadow-lg mt-16">
          <h3 className="text-2xl font-bold text-primary mb-4">Como Funciona a TCC?</h3>
          <p className="text-primary/80">
            A TCC é uma terapia estruturada e orientada a objetivos. Durante as sessões, o terapeuta e o paciente trabalham juntos para identificar padrões de pensamento que estão contribuindo para dificuldades emocionais e comportamentais. O foco é sempre em situações específicas e na melhoria das habilidades de enfrentamento. 
          </p>
          <p className="text-primary/80 mt-4">
            O objetivo é que, ao longo do tempo, o paciente aprenda a identificar e modificar seus próprios pensamentos, desenvolvendo uma maior autossuficiência emocional. A TCC tem uma abordagem prática, com tarefas e exercícios entre as sessões, o que permite que as mudanças aconteçam de forma rápida e eficaz.
          </p>
        </div>

        <div className="mt-16 text-center">
          <p className="text-primary/80 mb-6">
            Agende sua primeira sessão e comece sua jornada de transformação
          </p>
          <a 
            href="#contato" 
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 py-2 bg-[#15645F] text-white hover:bg-[#15645F]/90"
          >
            Agendar Sessão
          </a>
        </div>
      </div>
    </section>
  );
};

export default TCC;
