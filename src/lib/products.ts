export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  affiliateLink: string;
}

import smartphoneImg from "@/assets/product-smartphone.jpg";
import shoesImg from "@/assets/product-shoes.jpg";
import blenderImg from "@/assets/product-blender.jpg";
import bookImg from "@/assets/product-book.jpg";

export const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Smartphone Premium",
    description: "Tela AMOLED, câmera 108MP – link Amazon",
    price: "R$ 2.499,90",
    image: smartphoneImg,
    affiliateLink: "https://afiliado.com/produto?ref=seu-id",
  },
  {
    id: "2",
    name: "Tênis Esportivo",
    description: "Conforto e estilo para corridas – link Shopee",
    price: "R$ 299,90",
    image: shoesImg,
    affiliateLink: "https://afiliado.com/produto?ref=seu-id",
  },
  {
    id: "3",
    name: "Liquidificador Potente",
    description: "Multifuncional para cozinha – link Magazine Luiza",
    price: "R$ 149,90",
    image: blenderImg,
    affiliateLink: "https://afiliado.com/produto?ref=seu-id",
  },
  {
    id: "4",
    name: "Livro Best-Seller",
    description: "Leitura inspiradora – link Submarino",
    price: "R$ 39,90",
    image: bookImg,
    affiliateLink: "https://afiliado.com/produto?ref=seu-id",
  },
];

const STORAGE_KEY = "premium-products";

export function getProducts(): Product[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return defaultProducts;
    }
  }
  return defaultProducts;
}

export function saveProducts(products: Product[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}
