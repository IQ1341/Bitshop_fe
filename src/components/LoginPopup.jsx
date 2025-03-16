import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginPopup = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Sidebar Login */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold text-green-600">Welcome Back!</h2>
          <button className="text-red-600" onClick={onClose}>
            <FaTimes size={24} />
          </button>
        </div>

        <div className="p-6">
          <form className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link to="/forgot-password" className="text-sm text-green-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-4 text-center text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-green-600 font-semibold hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay untuk menutup login jika klik di luar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default LoginPopup;
