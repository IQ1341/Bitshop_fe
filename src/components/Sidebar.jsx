import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaHome, FaShoppingBag, FaInfoCircle, FaEnvelope, FaSignInAlt } from 'react-icons/fa';

const Sidebar = ({ isOpen, onClose, onLoginOpen }) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white bg-opacity-90 backdrop-blur-lg shadow-2xl transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-500 ease-in-out z-50  border-r-2 border-green-200`}
      >
        {/* Header Sidebar */}
        <div className="p-6 flex justify-between items-center border-b border-green-300">
          <h2 className="text-2xl font-extrabold text-green-700">BitShop</h2>
          <button className="text-green-700 hover:text-red-500 transition-all duration-300" onClick={onClose}>
            <FaTimes size={26} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col p-6 space-y-5">
          <NavItem to="/" icon={<FaHome />} text="Home" onClose={onClose} />
          <NavItem to="/product" icon={<FaShoppingBag />} text="Product" onClose={onClose} />
          <NavItem to="/about" icon={<FaInfoCircle />} text="About" onClose={onClose} />
          <NavItem to="/contact" icon={<FaEnvelope />} text="Contact" onClose={onClose} />

          {/* Login Button */}
          <button
            className="flex items-center gap-3 text-lg font-medium text-red-600 hover:bg-red-100 p-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg mt-6"
            onClick={() => {
              onClose();
              onLoginOpen();
            }}
          >
            <FaSignInAlt className="transition-transform duration-300 group-hover:rotate-12" />
            Login
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500" onClick={onClose}></div>}
    </>
  );
};

// Komponen untuk item menu agar lebih clean
const NavItem = ({ to, icon, text, onClose }) => (
  <Link
    to={to}
    className="flex items-center gap-4 text-lg font-medium text-green-700 hover:bg-green-100 p-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
    onClick={onClose}
  >
    {icon}
    {text}
  </Link>
);

export default Sidebar;
