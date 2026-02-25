import ProductCard from "./ProductCard";
import { getProducts } from "@/lib/products";

const ProductsSection = () => {
  const products = getProducts();

  return (
    <section id="produtos" className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-2">
            Produtos em <span className="text-gold">Destaque</span>
          </h2>
          <p className="text-muted-foreground">Selecionados especialmente para você</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
