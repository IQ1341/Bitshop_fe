import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Ganti dengan URL backend Anda
  withCredentials: true, // Pastikan cookies dikirim untuk refresh token
});

// Menambahkan token ke header setiap request
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor untuk menangani expired token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Meminta refresh token dari backend
        const res = await axios.get('/auth/refresh-token', { withCredentials: true });

        const newAccessToken = res.data.data.accessToken;
        localStorage.setItem('accessToken', newAccessToken); // Simpan token baru

        // Perbarui header Authorization dengan accessToken yang baru
        api.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return api(originalRequest); // Coba request yang gagal dengan token yang baru
      } catch (refreshError) {
        console.error('Refresh token gagal', refreshError);
        // Redirect user ke halaman login jika refresh token gagal
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
