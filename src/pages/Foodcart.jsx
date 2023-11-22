/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import Useauth from "../Hook/Useauth";
import { useLocation, useNavigate } from "react-router-dom";
import Useaxios from "../Hook/Useaxios";
import Usecart from "./Usecart";

const Foodcart = ({items}) => {

  const {user}=Useauth()
  const navigate=useNavigate()
  const location=useLocation()
  const axiossecure=Useaxios()
  const [refetch] =Usecart()

  const handlecart=()=>{
    if(user && user.email){

      const cartitem={
        menuid:items._id,
        email:user.email,
       name: items.name,
        image:items.image,
       price: items.price
      }
      axiossecure.post('/cart',cartitem)
      .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            title: "Good job!",
            text: `${items.name} insert suceessfully`,
            icon: "success"
          });
        }
      })

      refetch()

    }else{
      Swal.fire({
        title: "You Are Not Logged In",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please Login!"
      }).then((result) => {
        if (result.isConfirmed) {
         //send user to the login page
         navigate('/login',{state:{from:location}})
        }
      });
    }
  }
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={items.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{items.name}</h2>
          <p>{items.recipe}</p>
          <p>{items.price}</p>
          <div className="card-actions">
            <button onClick={handlecart} className="btn btn-primary">ADD To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default Foodcart;