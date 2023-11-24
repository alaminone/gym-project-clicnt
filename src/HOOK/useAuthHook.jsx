import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";


const useAuthHook = () => {

    const authHook = useContext(AuthContext)
    return authHook;
};

export default useAuthHook;