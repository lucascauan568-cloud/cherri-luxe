import { Crown, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-dark text-dark-foreground py-12">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-2">
            <Crown className="h-6 w-6 text-gold" />
            <span className="text-xl font-bold">
              Recomendações <span className="text-gold">Premium</span>
            </span>
          </div>

          <div className="flex flex-col gap-1 text-sm text-dark-foreground/70">
            <p>Duque de Caxias, RJ</p>
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4 text-gold" />
              <span>(21) 93500-3179</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4 text-gold" />
              <span>contato@recomendacoespremium.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-dark-foreground/60 hover:text-gold transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-dark-foreground/60 hover:text-gold transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-dark-foreground/60 hover:text-gold transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          <p className="text-gold font-semibold text-sm">
            Recomendações Premium – Suas Compras Inteligentes Começam Aqui!
          </p>

          <p className="text-xs text-dark-foreground/40 max-w-md">
            Somos afiliados e ganhamos comissão em compras qualificadas – sem custo extra para você.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
