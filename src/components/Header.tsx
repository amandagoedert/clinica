import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  // Link do WhatsApp com o número formatado internacionalmente
  const whatsappLink = `https://wa.me/5545991244303`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Logo com fundo transparente */}
            <img 
              src="/aaa.png" // Caminho corrigido para a imagem pública
              alt="Clínica Equanimité Logo"
              className="h-[80px] w-auto" // Mantém a proporção e aumenta o logo
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-primary hover:text-primary/80">Início</a>
            <a href="#sobre" className="text-primary hover:text-primary/80">Sobre</a>
            <a href="#servicos" className="text-primary hover:text-primary/80">Serviços</a>
            <a href="#depoimentos" className="text-primary hover:text-primary/80">Depoimentos</a>
            <a href="#tcc" className="text-primary hover:text-primary/80">TCC</a>
            <a href="#dicas" className="text-primary hover:text-primary/80">Dicas</a>
            <a href="#contato" className="text-primary hover:text-primary/80">Contato</a>
            
            {/* Botão Agendar Consulta */}
            <Button
              asChild
              variant="default"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agende uma Consulta
              </a>
            </Button>
          </div>
          
          {/* Menu Mobile */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;