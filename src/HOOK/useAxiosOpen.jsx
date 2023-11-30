import axios from "axios";

const axiosopen = axios.create({
    baseURL: 'https://finalproject-server.vercel.app'
})
const useAxiosOpen = () => {
    return axiosopen;
};

export default useAxiosOpen;