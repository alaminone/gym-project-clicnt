import axios from "axios";
import useAuthHook from "./useAuthHook";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://finalproject-server.vercel.app/',
  });
const useAxiossecure = () => {
    const { logOut } = useAuthHook();
    const navigate = useNavigate();
  
    axiosSecure.interceptors.request.use(function (config) {
      // Intercepting the request to add the Authorization header
      const token = localStorage.getItem('jwt-token');
      // console.log('request stopped by interceptors', token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
  
    axiosSecure.interceptors.response.use(function (response) {
    
      return response;
    }, async (error) => {
      
      const status = error.response.status;
  
      if (status === 401 || status === 403) {
        await logOut();
        navigate('/login');
      }
      return Promise.reject(error);
    });
    return axiosSecure
};

export default useAxiossecure;