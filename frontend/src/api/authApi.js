import axiosInstance from './axiosConfig';

export const authService = {

  // ================= REGISTER =================
  register: async (userData) => {
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;
  },

  // ================= LOGIN =================
  login: async (credentials) => {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data;
  },

  // ================= CURRENT USER =================
  getMe: async () => {
    const response = await axiosInstance.get('/auth/me');
    return response.data;
  },

  // ================= LOGOUT =================
  logout: async () => {
    const response = await axiosInstance.post('/auth/logout');
    return response.data;
  },

  // ================= FORGOT PASSWORD =================
  forgotPassword: async (email) => {
    const response = await axiosInstance.post('/auth/forgot-password', {
      email,
    });
    return response.data;
  },

  // ================= RESET PASSWORD =================
  resetPassword: async (token, password) => {
    const response = await axiosInstance.post(
      `/auth/reset-password/${token}`,
      { password }
    );
    return response.data;
  },

};

export default authService;
