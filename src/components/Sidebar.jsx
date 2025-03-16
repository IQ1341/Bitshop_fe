import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, onClose, onLoginOpen }) => {
  return (
    <>
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold text-green-600">Menu</h2>
          <button className="text-green-600" onClick={onClose}>
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4 text-green-600">
          <Link to="/" className="hover:underline" onClick={onClose}>Home</Link>
          <Link to="/product" className="hover:underline" onClick={onClose}>Product</Link>
          <Link to="/about" className="hover:underline" onClick={onClose}>About</Link>
          <Link to="/contact" className="hover:underline" onClick={onClose}>Contact</Link>
          <button className="hover:underline text-red-600" onClick={() => { onClose(); onLoginOpen(); }}>
            Login
          </button>
        </nav>
      </div>

      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>}
    </>
  );
};

export default Sidebar;
