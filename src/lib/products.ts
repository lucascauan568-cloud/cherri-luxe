import { supabase } from "@/integrations/supabase/client";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  affiliateLink: string;
}

export async function fetchProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }

  return (data || []).map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description || "",
    price: p.price,
    image: p.image || "",
    affiliateLink: p.affiliate_link || "",
  }));
}

export async function addProduct(product: Omit<Product, "id">): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .insert({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      affiliate_link: product.affiliateLink,
    })
    .select()
    .single();

  if (error) {
    console.error("Erro ao adicionar produto:", error);
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    description: data.description || "",
    price: data.price,
    image: data.image || "",
    affiliateLink: data.affiliate_link || "",
  };
}

export async function updateProduct(id: string, product: Omit<Product, "id">): Promise<boolean> {
  const { error } = await supabase
    .from("products")
    .update({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      affiliate_link: product.affiliateLink,
    })
    .eq("id", id);

  if (error) {
    console.error("Erro ao atualizar produto:", error);
    return false;
  }
  return true;
}

export async function deleteProduct(id: string): Promise<boolean> {
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Erro ao remover produto:", error);
    return false;
  }
  return true;
}
