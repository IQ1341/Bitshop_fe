import React, { useState } from 'react';
import { FaTimes, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/authApi';
import { toast } from 'react-toastify';

const Login = ({ isOpen, onClose, onSwitchToSignUp }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await loginUser(formData);
  
      const { accessToken, refreshToken } = response?.data || {};
  
      if (accessToken && refreshToken) {
        // Simpan accessToken di localStorage
        localStorage.setItem('accessToken', accessToken);
        // Simpan refreshToken di cookies (secure and httpOnly)
        document.cookie = `refreshToken=${refreshToken}; path=/; Secure; HttpOnly; SameSite=None`; 
      }
  
      toast.success(response.message || 'Login successful!');
      setTimeout(() => {
        onClose(); 
      }, 2000);
    } catch (err) {
      const errorMessage = err.message;
      if (errorMessage.includes('User belum login')) {
        toast.error('Akun tidak ditemukan. Silakan daftar terlebih dahulu.');
      } else if (errorMessage.includes('Contact to admin')) {
        toast.error('Akun Anda belum aktif. Hubungi admin.');
      } else if (errorMessage.includes('Check Password Anda')) {
        toast.error('Password salah. Coba lagi.');
      } else {
        toast.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };
  

  // Fungsi untuk navigasi ke halaman Forgot Password dan menutup popup
  const handleForgotPassword = () => {
    navigate('/forgot-password'); // Navigasi ke halaman Forgot Password
    onClose(); // Menutup popup login
  };

  return (
    <>
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold text-green-600">Login to BitShop</h2>
          <button className="text-red-600" onClick={onClose}>
            <FaTimes size={24} />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
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

            {/* Forgot Password Link */}
            <div className="text-right text-sm">
              <button 
                type="button"
                onClick={handleForgotPassword}
                className="text-green-600 font-semibold hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="mt-4 text-center text-sm">
            Don't have an account?{' '}
            <button onClick={onSwitchToSignUp} className="text-green-600 font-semibold hover:underline">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50  transition-transform duration-500 ease-in-out z-40" onClick={onClose}></div>}
    </>
  );
};

export default Login;
