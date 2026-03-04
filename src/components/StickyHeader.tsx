import logo from "@/assets/logo.png";

const StickyHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container flex items-center justify-center h-20 px-4 relative">
        <a
          href="#produtos"
          className="absolute right-4 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          Ver Ofertas
        </a>
        <img
          src={logo}
          alt="Chérie Luxe"
          className="h-16 sm:h-18 w-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.15)]"
          style={{ 
            imageRendering: '-webkit-optimize-contrast',
            filter: 'brightness(0.75) contrast(1.3) saturate(1.2)'
          }}
        />
      </div>
    </header>
  );
};

export default StickyHeader;
