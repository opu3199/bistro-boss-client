import { Navigate, useLocation } from "react-router-dom";
import Useauth from "./Useauth";

const Privateroute = ({children}) => {
    const {user,loading}=Useauth()
    const location =useLocation()
     if(loading){
        return <span className="loading  loading-bars loading-lg"></span>
    }

    if(user){
        return children
    }
    return  <Navigate  to='/login'  state={{from:location}} replace ></Navigate>
};

export default Privateroute;