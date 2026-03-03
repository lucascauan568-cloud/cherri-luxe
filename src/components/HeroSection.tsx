import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import logoHero from "@/assets/logo-hero.png";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [hero1, hero2, hero3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Mulher elegante ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 container px-4 text-center max-w-2xl mx-auto animate-fade-up">
        <img
          src={logoHero}
          alt="Chérie Luxe"
          className="mx-auto mb-6 h-52 sm:h-64 md:h-80 w-auto drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]"
          style={{ imageRendering: 'auto' }}
        />
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
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 gold-glow"
        >
          VER OFERTAS AGORA
          <ArrowRight className="h-5 w-5" />
        </a>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary scale-125" : "bg-primary-foreground/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
