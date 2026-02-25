import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Produtos premium em destaque"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 container px-4 text-center max-w-2xl mx-auto animate-fade-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary-foreground leading-tight mb-4 drop-shadow-lg">
          Descubra Produtos Incríveis com Preços Imperdíveis!
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/90 mb-2 font-light leading-relaxed">
          Recomendações Exclusivas para Você
        </p>
        <p className="text-base sm:text-lg text-primary-foreground/80 mb-8 font-light">
          Selecionamos os melhores itens de parceiros confiáveis. Clique e compre com segurança – ganhe descontos exclusivos via nossos links!
        </p>
        <a
          href="#produtos"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          VER OFERTAS AGORA
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
