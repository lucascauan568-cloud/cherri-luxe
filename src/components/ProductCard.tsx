import { ExternalLink } from "lucide-react";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-card rounded-lg border border-border shadow-premium overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-foreground mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 flex-1">{product.description}</p>
        <p className="text-2xl font-black text-gold mb-4">{product.price}</p>
        <a
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg w-full"
        >
          Comprar Agora
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
