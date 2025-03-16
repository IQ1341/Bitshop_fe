import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import LoginPopup from './LoginPopup.jsx';
import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const isLoggedIn = false;
  const cartItemCount = 1;

  return (
    <>
      {/* Overlay untuk sidebar (Hanya menutupi home, tidak login popup) */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-[50]" 
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <header className="h-20 shadow-md sticky top-0 bg-white z-[50]">
        <div className="container mx-auto flex items-center h-full px-4 justify-between">
          {/* Logo */}
          <div className="h-full">
            <Link className="h-full flex justify-center items-center">
              <img src={logo} width={150} height={150} alt="logo" />
            </Link>
          </div>

          {/* Navbar Desktop */}
          <div className="hidden lg:block">
            <Navbar />
          </div>

          {/* Search, Login / Mobile Menu, Cart */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600">
                <FaSearch />
              </button>
            </div>

            {/* Login (Desktop) */}
            {!isLoggedIn && (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="hidden lg:block text-green-600 hover:text-green-800"
              >
                Login
              </button>
            )}

            {/* Hamburger Menu (Mobile) */}
            {!isLoggedIn && (
              <button className="lg:hidden text-green-600" onClick={() => setMenuOpen(true)}>
                <FaBars size={24} />
              </button>
            )}

            {/* Cart */}
            <Link to="/cart" className="text-green-600 hover:text-green-800 relative">
              <FaShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} onLoginOpen={() => setIsLoginOpen(true)} />

      {/* Overlay untuk login popup (hanya menutupi home, bukan popup) */}
      {isLoginOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-[50]" 
          onClick={() => setIsLoginOpen(false)}
        ></div>
      )}

      {/* Popup Login (z-[60] agar di atas overlay) */}
      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Header;
