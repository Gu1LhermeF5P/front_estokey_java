"use client";
import Link from "next/link";
import { FaHome, FaBox, FaPlusCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="bg-gray-950 p-6 shadow-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold tracking-wide">
          <Link href="/" className="flex items-center hover:text-cyan-400 transition-all">
            <FaHome className="mr-2" /> EstoqueApp
          </Link>
        </div>
        <div className="space-x-6">
          <Link href="/" className="text-gray-300 flex items-center hover:text-cyan-400 transition-all">
            <FaBox className="mr-2" /> Produtos
          </Link>
          <a href="#add-product" className="text-gray-300 flex items-center hover:text-cyan-400 transition-all">
            <FaPlusCircle className="mr-2" /> Adicionar Produto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
