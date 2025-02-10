import { GraduationCap, Heart, Clock } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 px-4 bg-[#1b2c1d]" id="sobre">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Título com cor laranja */}
            <h2 className="text-4xl font-bold text-[#d3712a] mb-4">Sobre a Clínica Equanimité</h2>
            <p className="text-[#FFFFFF] text-justify mb-6 leading-relaxed">
              A <strong>Clínica Equanimité</strong> é um espaço dedicado ao cuidado psicológico online, com a missão de oferecer atendimentos personalizados e de alta qualidade, com base na Terapia Cognitivo-Comportamental (TCC). A clínica tem como objetivo proporcionar um atendimento acolhedor e ético, auxiliando os pacientes a enfrentarem desafios psicológicos e a alcançarem um maior equilíbrio emocional e bem-estar.

              <br /><br />

              <strong className="text-[#d3712a]">Significado do Nome "Equanimité"</strong><br />
              O nome "Equanimité" foi escolhido para refletir a filosofia central da clínica: a busca pela <strong className="text-[#d3712a]">equanimidade</strong> — um estado de equilíbrio emocional e serenidade interior. Derivado do francês, "equanimité" significa "equanimidade", a capacidade de manter a tranquilidade e a estabilidade emocional, mesmo diante das adversidades. Esse conceito é a base de todos os atendimentos realizados na clínica, com o objetivo de apoiar cada paciente na jornada de cultivar uma mente mais equilibrada e resiliente.

              <br /><br />

              <strong className="text-[#d3712a]">A Abordagem Terapêutica</strong><br />
              A Terapia Cognitivo-Comportamental (TCC) é uma abordagem eficaz e cientificamente reconhecida, amplamente utilizada no tratamento de uma variedade de dificuldades emocionais e psicológicas. A TCC parte do princípio de que nossos pensamentos, emoções e comportamentos estão interligados, e ao modificar padrões de pensamento disfuncionais, é possível promover mudanças significativas nas emoções e nas ações de uma pessoa.

              <br /><br />

              A clínica adota essa abordagem terapêutica, focando no autoconhecimento, na mudança de padrões limitantes e na construção de estratégias práticas para que o paciente enfrente os desafios da vida de forma mais saudável e equilibrada.

              <br /><br />
            </p>
          </div>

          {/* Imagem substituída por <img> */}
          <div className="relative">
            <div className="aspect-square rounded-2xl p-6"> {/* Removido o fundo rosa bg-secondary/50 */}
              <img 
                src="public/21.png"  // Caminho da nova imagem
                alt="Imagem de exemplo"
                className="w-full h-full rounded-xl object-cover"  // Garantindo que a imagem cubra a área e mantenha as bordas arredondadas
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <>
      <About />
    </>
  );
};

export default AboutPage;
