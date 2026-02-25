import { ArrowUp } from "lucide-react";

const FloatingCTA = () => {
  return (
    <a
      href="#produtos"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-gold"
      aria-label="Ver ofertas"
    >
      <ArrowUp className="h-6 w-6" />
    </a>
  );
};

export default FloatingCTA;
