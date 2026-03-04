import logo from "@/assets/logo.png";

const StickyHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container flex items-center justify-center h-16 px-4 relative">
        <a
          href="#produtos"
          className="absolute right-4 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          Ver Ofertas
        </a>
        <img src={logo} alt="Chérie Luxe" className="h-14 w-auto" style={{ imageRendering: 'auto', WebkitFontSmoothing: 'antialiased' }} />
      </div>
    </header>
  );
};

export default StickyHeader;
