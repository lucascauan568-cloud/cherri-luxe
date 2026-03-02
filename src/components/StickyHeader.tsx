import logo from "@/assets/logo.png";

const StickyHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Chérie Luxe" className="h-10 w-auto" />
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
