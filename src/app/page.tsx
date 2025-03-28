"use client";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { Product } from "./types/Product";
import { FaEdit, FaTrash, FaCartPlus } from "react-icons/fa";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Caderno", quantity: 10, price: 15.99 },
    { id: 2, name: "Caneta", quantity: 5, price: 3.50 },
  ]);

  const [newProduct, setNewProduct] = useState<Product>({ id: 0, name: "", quantity: 0, price: 0 });
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleSale = (id: number) => {
    setProducts(products.map((p) => (p.id === id && p.quantity > 0 ? { ...p, quantity: p.quantity - 1 } : p)));
  };

  const handleCreate = () => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
    setNewProduct({ id: 0, name: "", quantity: 0, price: 0 });
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setNewProduct(product);
  };

  const handleUpdate = () => {
    setProducts(products.map((p) => (p.id === editingProduct?.id ? newProduct : p)));
    setEditingProduct(null);
    setNewProduct({ id: 0, name: "", quantity: 0, price: 0 });
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <NavBar />
      <div className="container mx-auto p-8">
        {/* Formulário de Adicionar/Editar Produto */}
        <section id="add-product" className="mb-8 p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-3xl font-semibold">🛒 {editingProduct ? "Editar Produto" : "Adicionar Produto"}</h2>
          
          {/* Nome do Produto */}
          <label htmlFor="product-name">Nome do Produto:</label>
          <input 
            id="product-name" 
            type="text" 
            placeholder="Ex: Notebook" 
            value={newProduct.name} 
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
            className="input"
          />

          {/* Quantidade do Produto */}
          <label htmlFor="product-quantity">Quantidade do Produto:</label>
          <input 
            id="product-quantity" 
            type="number" 
            placeholder="Ex: 10" 
            value={newProduct.quantity} 
            onChange={(e) => setNewProduct({ ...newProduct, quantity: Number(e.target.value) })} 
            className="input"
          />

          {/* Valor do Produto */}
          <label htmlFor="product-price">Valor do Produto (R$):</label>
          <input 
            id="product-price" 
            type="number" 
            placeholder="Ex: 199.99" 
            value={newProduct.price} 
            onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })} 
            className="input"
          />

          <button onClick={editingProduct ? handleUpdate : handleCreate} className="btn">
            {editingProduct ? "Atualizar Produto" : "Adicionar Produto"}
          </button>
        </section>

        {/* Lista de Produtos */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="card">
              <h2 className="text-lg font-bold">{p.name}</h2>
              <p className="text-gray-400">📦 Quantidade: {p.quantity}</p>
              <p className="text-gray-300 font-semibold">💰 R${p.price.toFixed(2)}</p>
              <div className="buttons">
                <button onClick={() => handleSale(p.id)} className="btn"><FaCartPlus /> Vender</button>
                <button onClick={() => handleEdit(p)} className="btn-edit"><FaEdit /> Editar</button>
                <button onClick={() => handleDelete(p.id)} className="btn-delete"><FaTrash /> Deletar</button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
