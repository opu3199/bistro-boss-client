import axios from "axios";

 const axiossecure=axios.create({
    baseURL:'http://localhost:5000'
})
const Useaxios = () => {
   axiossecure.interceptors.request.use(function(config){
      // console.log('request stopp interseptors')
      return config
   },function(error){
      return Promise.reject(error)

   })
   return axiossecure
};

export default Useaxios;