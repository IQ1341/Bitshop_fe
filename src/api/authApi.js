import baseUrl from "./baseUrl";

export const registerUser = async (userData) => {
    try {
      const res = await baseUrl.post('/user/register', userData);
      return res.data;
    } catch (error) {
      const errorMessage = error.res?.data?.message || 'Registrasi failed';
      throw new Error(errorMessage);
    }
  };


  export const loginUser = async (userData) => {
    try {
      const response = await baseUrl.post('/user/login', userData);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Login failed';
      throw new Error(errorMessage);
    }
  };
  export const forgotPassword = async (email) => {
    try {
      const response = await baseUrl.put('/user/forgot-password', { email });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Gagal mengirim OTP');
    }
  };
  
  export const verifyOTP = async (email, otp) => {
    try {
      const response = await baseUrl.put('/user/verify-forgot-password-otp', { email, otp });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'OTP tidak valid');
    }
  };
  
  export const resetPassword = async (email, newPassword, confirmPassword) => {
    try {
      const response = await baseUrl.put('/user/reset-password', {
        email,
        newPassword,
        confirmPassword,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Gagal mengubah password');
    }
  };

  export const userDetails = async (userData) => {
    try {
      const response = await baseUrl.get('/user/user-details');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Gagal mengubah password');
    }
  };
  

