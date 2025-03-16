import React from 'react';

const RegisterPopup = ({ isOpen, onClose, onSwitchToLogin }) => {
  return (
    <div className={`fixed inset-0 flex justify-end items-center z-50 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-30" onClick={onClose}></div>

      {/* Register Form */}
      <div className="bg-white w-80 md:w-96 h-full shadow-lg p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-4">Daftar Akun</h2>

        <form className="space-y-4">
          {/* Nama */}
          <div>
            <label className="block text-gray-700">Nama</label>
            <input type="text" className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-green-500" placeholder="Masukkan Nama" />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-green-500" placeholder="Masukkan Email" />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-green-500" placeholder="Masukkan Password" />
          </div>

          {/* Konfirmasi Password */}
          <div>
            <label className="block text-gray-700">Konfirmasi Password</label>
            <input type="password" className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-green-500" placeholder="Ulangi Password" />
          </div>

          {/* Tombol Daftar */}
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Daftar</button>
        </form>

        {/* Pindah ke Login */}
        <p className="text-center text-sm mt-4">
          Sudah punya akun? <button onClick={onSwitchToLogin} className="text-green-600 underline">Login</button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPopup;
