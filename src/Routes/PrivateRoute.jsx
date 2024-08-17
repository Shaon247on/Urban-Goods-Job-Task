import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)    
    const location = useLocation()

    if(loading){
       return <div className="w-full flex justify-center items-center text-[10px] h-[100vh] bg-meteor"> <span className="loading loading-infinity w-[20%]"></span></div>
    }
     if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;