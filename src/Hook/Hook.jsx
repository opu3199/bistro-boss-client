import { useQuery } from "@tanstack/react-query";
import Useaxiospublic from "./Useaxiospublic";

const Hook = () => {
    const axiospublic=Useaxiospublic()
    // const [menu,setmenu]=useState([])
    // const [loading,setloading]=useState(true)
    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setmenu(data)
    //         setloading(false)
    //     })
            
            
    // },[])
    // return [menu,loading]

    const {data:menu=[],ispending:loading,refetch}=useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
            const res=await axiospublic.get('/menu')
            return res.data

        }
    })

    return [menu,loading,refetch]
   
};

export default Hook;