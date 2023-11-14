import axios from "axios";

 const axiossecure=axios.create({
    baseURL:'http://localhost:5000'
})
const Useaxios = () => {
   return axiossecure
};

export default Useaxios;