import Link from 'next/link';
import { FaHome, FaBox, FaPlusCircle } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          <Link href="/" passHref>
            <a className="flex items-center">
              <FaHome className="mr-2" /> Estoque App
            </a>
          </Link>
        </div>
        <div className="space-x-6">
          <Link href="/" passHref>
            <a className="text-white flex items-center hover:text-blue-300">
              <FaBox className="mr-2" /> Produtos
            </a>
          </Link>
          <Link href="#add-product" passHref>
            <a className="text-white flex items-center hover:text-blue-300">
              <FaPlusCircle className="mr-2" /> Adicionar Produto
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
