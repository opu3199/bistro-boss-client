import { useQuery } from "@tanstack/react-query";
import Useaxios from "../Hook.jsx/Useaxios";
import Useauth from "../Hook.jsx/Useauth";


const Usecart = () => {
    const axiossecure=Useaxios()
    const {user}=Useauth()
   const {refetch,data:cart =[]}=useQuery({
    queryKey:['cart',user?.email],
    queryFn:async()=>{
        const res=await axiossecure.get(`/cart?email=${user.email}`)
        return res.data

    }

   })
   return [cart,refetch]
};

export default Usecart;