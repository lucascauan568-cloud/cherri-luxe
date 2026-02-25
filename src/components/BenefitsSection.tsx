import { Award, BadgePercent, ShieldCheck, RefreshCw } from "lucide-react";

const benefits = [
  { icon: Award, title: "Seleção Curada por Especialistas" },
  { icon: BadgePercent, title: "Descontos Exclusivos em Afiliados" },
  { icon: ShieldCheck, title: "Compras Seguras e Rápidas" },
  { icon: RefreshCw, title: "Atualizações Semanais de Ofertas" },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container px-4">
        <h2 className="text-2xl sm:text-3xl font-black text-foreground text-center mb-10">
          Por que comprar <span className="text-gold">via nós</span>?
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col items-center text-center gap-3 p-4">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                <b.icon className="h-7 w-7 text-gold" />
              </div>
              <p className="text-sm font-semibold text-foreground leading-snug">{b.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
