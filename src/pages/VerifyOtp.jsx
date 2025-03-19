import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import { verifyOTP } from '../api/authApi';
import { useNavigate, useLocation } from 'react-router-dom';

const VerifyOTP = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      toast.error("Silakan masukkan email terlebih dahulu.");
      navigate('/forgot-password'); // Redirect jika tidak ada email
    }
  }, [email, navigate]);


  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Hanya angka yang bisa diinput

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus(); // Fokus ke input selanjutnya
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus(); // Pindah ke input sebelumnya jika dihapus
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join(""); // Gabungkan angka OTP jadi string
    if (otpValue.length < 6) {
      toast.error("Masukkan kode OTP lengkap!");
      return;
    }

    try {
      const response = await verifyOTP(email, otpValue);
      toast.success(response.message);
      navigate('/reset-password', { state: { email } });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-md">
      <h2 className="text-2xl font-bold text-center text-green-600">Verifikasi OTP</h2>
      <p className="text-gray-500 text-center mb-4">Masukkan kode OTP yang dikirim ke email Anda</p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <div className="flex space-x-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              value={digit}
              maxLength="1"
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-10 h-10 border border-green-500 text-center text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          ))}
        </div>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg">
          Verifikasi OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyOTP;
