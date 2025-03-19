import React, { useState } from 'react';
import { FaTimes, FaEye, FaEyeSlash } from 'react-icons/fa';
import { registerUser } from '../api/authApi';
import { toast } from 'react-toastify';

const Registrasi = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords tidak sama');
      return;
    }
    try {
      setLoading(true);
      const response = await registerUser(formData);

      toast.success(response.message || 'Registration successful!');
      setTimeout(() => {
        onClose();
        onSwitchToLogin();
      }, 2000);
    } catch (err) {
      const errorMessage = err.message;
      if (errorMessage.includes('Alredy register email')) {
        toast.error('Email sudah terdaftar. Gunakan email lain.');
      } else {
        toast.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold text-green-600">Create Account Bitshop</h2>
          <button className="text-red-600" onClick={onClose}>
            <FaTimes size={24} />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-gray-700">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your password"
                required
              />
              <button type="button" className="absolute right-3 top-9 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Confirm your password"
                required
              />
              <button type="button" className="absolute right-3 top-9 text-gray-500" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition" disabled={loading}>
              {loading ? 'Registering...' : 'Registrasi'}
            </button>
          </form>

          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <button onClick={onSwitchToLogin} className="text-green-600 font-semibold hover:underline">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out z-40" onClick={onClose}></div>}
    </>
  );
};

export default Registrasi;