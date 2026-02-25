import { Crown } from "lucide-react";

const StickyHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-2">
          <Crown className="h-6 w-6 text-gold" />
          <span className="text-lg font-bold text-foreground tracking-tight">
            Recomendações <span className="text-gold">Premium</span>
          </span>
        </div>
        <a
          href="#produtos"
          className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          Ver Ofertas
        </a>
      </div>
    </header>
  );
};

export default StickyHeader;
