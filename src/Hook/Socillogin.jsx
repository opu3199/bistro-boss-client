import Useauth from "./Useauth";
import { AiFillGoogleCircle } from "react-icons/ai";
import Useaxiospublic from "./Useaxiospublic";
import { useNavigate } from "react-router-dom";


const Socillogin = () => {
    const {googlelogin}=Useauth()
    const axiospublic=Useaxiospublic()
    const navigate=useNavigate()


    const handlegoogle=()=>{
        googlelogin()
    .then(res=>{
        console.log(res.user)
        const userinfo={
            email:res.user?.email,
            name:res.user?.displayName
        }
        axiospublic.post('/user',userinfo)
        .then(res=>{
            console.log(res.data)
            navigate('/')
        })
    })
    .catch(error=>console.error(error))
        
    }
    return (
        <div>
             <div className="divider divider-accent"></div>

              
<button onClick={handlegoogle} className="text-4xl text-green-600 w-full flex justify-center bg-white"><AiFillGoogleCircle></AiFillGoogleCircle></button>
            
        </div>
    );
};

export default Socillogin;