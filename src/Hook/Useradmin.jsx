import { useQuery } from "@tanstack/react-query";
import Useauth from "./Useauth";
import Useaxios from "./Useaxios";


const Useradmin = () => {
    const {user}=Useauth()
    const axiossecure=Useaxios()
    const {data : isAdmin}=useQuery({
        queryKey:[user?.email,'isAdmin'],
        queryFn:async()=>{
            const res= await axiossecure.get(`/user/admin/${user.email}`)
            return res.data.admin
        }
    })
   return [isAdmin]
};

export default Useradmin;
