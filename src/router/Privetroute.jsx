import { Navigate, useLocation } from "react-router-dom";
import useAuthHook from "../HOOK/useAuthHook";


// eslint-disable-next-line react/prop-types
const Privetroute = ({children}) => {
    const { user, loading } = useAuthHook();
    const location = useLocation();

    if(loading){
        return <progress className="progress w-full progress-secondary"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default Privetroute;