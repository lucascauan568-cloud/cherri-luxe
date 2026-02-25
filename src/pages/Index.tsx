import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import BenefitsSection from "@/components/BenefitsSection";
import FooterSection from "@/components/FooterSection";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <main className="pt-14">
        <HeroSection />
        <ProductsSection />
        <BenefitsSection />
      </main>
      <FooterSection />
      <FloatingCTA />
    </div>
  );
};

export default Index;
