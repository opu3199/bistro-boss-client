import { useContext } from "react";
import { AuthContext } from "./Authprovider";


const Useauth = () => {
    const useauth=useContext(AuthContext)
    return useauth
};

export default Useauth;