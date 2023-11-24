import axios from "axios";

const axiosopen = axios.create({
    baseURL: 'http://localhost:5001'
})
const useAxiosOpen = () => {
    return axiosopen;
};

export default useAxiosOpen;