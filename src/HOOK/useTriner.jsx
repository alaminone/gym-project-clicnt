import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./useAuthHook";
import useAxiossecure from "./useAxiossecure";


const useTriner = () => {
    const {user} = useAuthHook();
    const axiosSecure = useAxiossecure();
   
    const {data: isTrainer,isLoading} = useQuery({
        queryKey: ['isTrainer', user?.email],
       
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/trainer/${user?.email}`);
            return res.data.trainer;
        }
    })
    return [isTrainer , isLoading]
};

export default useTriner;