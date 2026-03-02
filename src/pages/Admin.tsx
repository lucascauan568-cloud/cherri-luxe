import { useState } from "react";
import { getProducts, saveProducts, type Product } from "@/lib/products";
import { Plus, Trash2, Pencil, Save, LogIn, X } from "lucide-react";
import logo from "@/assets/logo-hero.png";

const AdminLogin = ({ onLogin }: { onLogin: () => void }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "afiliado123") {
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-4">
      <div className="bg-card rounded-lg shadow-premium p-8 w-full max-w-sm">
        <div className="flex items-center justify-center gap-2 mb-6">
          <img src={logo} alt="Chérie Luxe" className="h-10 w-auto" />
          <h1 className="text-xl font-bold text-foreground">Admin</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Senha</label>
            <input
              type="password"
              placeholder="Digite a senha secreta"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {error && <p className="text-destructive text-xs mt-1">Senha incorreta</p>}
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <LogIn className="h-4 w-4" />
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const [products, setProducts] = useState<Product[]>(getProducts());
  const [editing, setEditing] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<Omit<Product, "id">>({
    name: "", description: "", price: "", image: "", affiliateLink: "",
  });
  const [saved, setSaved] = useState(false);

  const resetForm = () => {
    setForm({ name: "", description: "", price: "", image: "", affiliateLink: "" });
    setEditing(null);
    setShowForm(false);
  };

  const handleAdd = () => {
    if (!form.name) return;
    const newProduct: Product = { ...form, id: Date.now().toString() };
    const updated = [...products, newProduct];
    setProducts(updated);
    saveProducts(updated);
    resetForm();
  };

  const handleUpdate = () => {
    if (!editing) return;
    const updated = products.map((p) => (p.id === editing.id ? { ...editing, ...form } : p));
    setProducts(updated);
    saveProducts(updated);
    resetForm();
  };

  const handleRemove = (id: string) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    saveProducts(updated);
  };

  const startEdit = (product: Product) => {
    setEditing(product);
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      affiliateLink: product.affiliateLink,
    });
    setShowForm(true);
  };

  const handleSaveAll = () => {
    saveProducts(products);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-dark">
      <header className="bg-card border-b border-border px-4 py-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Chérie Luxe" className="h-8 w-auto" />
            <h1 className="text-lg font-bold text-foreground">
              Área Admin – <span className="text-gold">Gerencie Seus Produtos</span>
            </h1>
          </div>
          <button
            onClick={handleSaveAll}
            className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Save className="h-4 w-4" />
            {saved ? "Salvo!" : "Salvar Tudo"}
          </button>
        </div>
      </header>

      <div className="container px-4 py-8 max-w-3xl mx-auto space-y-6">
        <div className="bg-gold/10 border border-gold/30 rounded-lg p-3 text-sm text-foreground">
          Esta área é exclusiva do dono do site – não visível para visitantes. Use para inserir produtos, links de afiliados e imagens personalizadas.
        </div>

        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="h-5 w-5" />
            Adicionar Produto
          </button>
        )}

        {showForm && (
          <div className="bg-card rounded-lg border border-primary/30 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-foreground">
                {editing ? "Editar Produto" : "Novo Produto"}
              </h3>
              <button onClick={resetForm} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            {[
              { label: "Nome do Produto", key: "name" as const, placeholder: "Ex: Smartphone Premium" },
              { label: "Descrição Curta", key: "description" as const, placeholder: "Ex: Tela AMOLED..." },
              { label: "Preço Aproximado (R$)", key: "price" as const, placeholder: "Ex: R$ 2.499,90" },
              { label: "Link de Afiliado", key: "affiliateLink" as const, placeholder: "https://..." },
              { label: "URL da Imagem", key: "image" as const, placeholder: "https://... ou /imagem.jpg" },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-semibold text-foreground mb-1">{field.label}</label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  value={form[field.key]}
                  onChange={(e) => setForm((f) => ({ ...f, [field.key]: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>
            ))}
            <button
              onClick={editing ? handleUpdate : handleAdd}
              className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              {editing ? "Atualizar Produto" : "Adicionar Produto"}
            </button>
          </div>
        )}

        <div className="space-y-3">
          <h3 className="font-bold text-dark-foreground text-lg">Produtos Atuais ({products.length})</h3>
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-lg border border-border p-4 flex items-center gap-4"
            >
              <div className="w-16 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-foreground text-sm truncate">{product.name}</p>
                <p className="text-xs text-muted-foreground truncate">{product.description}</p>
                <p className="text-sm font-bold text-gold">{product.price}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => startEdit(product)}
                  className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleRemove(product.id)}
                  className="p-2 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    return <AdminLogin onLogin={() => setAuthenticated(true)} />;
  }

  return <AdminDashboard />;
};

export default Admin;
