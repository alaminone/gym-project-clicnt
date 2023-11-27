import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./useAuthHook";
import useAxiossecure from "./useAxiossecure";


const useMember = () => {
    const {user} = useAuthHook();
    const axiosSecure = useAxiossecure();
   
    const {data: isMember,isLoading} = useQuery({
        queryKey: ['isMember', user?.email],
       
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/member/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isMember , isLoading]
};


export default useMember;