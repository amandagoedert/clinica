import About from "../components/About";
import Contact from "../components/contato";
import Features from "../components/dicas";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import TCC from "../components/TCC";
import Leituras from "../components/Leituras";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <TCC />
        <Services />
        <Features />
        <Testimonials />
        <Leituras />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
