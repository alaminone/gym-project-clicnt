import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./useAuthHook";
import useAxiossecure from "./useAxiossecure";


const useAdmin = () => {
    const {user} = useAuthHook();
    const axiosSecure = useAxiossecure();
   
    const {data: isAdmin,isLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
       
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin , isLoading]
};

export default useAdmin;