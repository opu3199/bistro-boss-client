import axios from "axios";


const axiospublic=axios.create({
    baseURL:'http://localhost:5000'
})
const Useaxiospublic = () => {
    return axiospublic;
};

export default Useaxiospublic;