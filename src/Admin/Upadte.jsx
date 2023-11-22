import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Useaxiospublic from "../Hook/Useaxiospublic";
import Useaxios from "../Hook/Useaxios";
import Swal from "sweetalert2";

const image_hosting_key=import.meta.env. VITE_IMAGE_HOSTING_KEY
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Upadte = () => {
    const {name,category,recipe,price,image,_id}=useLoaderData()
    const { register, handleSubmit } = useForm()

    const axiospublic=Useaxiospublic()
    const axiossecure=Useaxios()
    const onSubmit= async (data) => {
        console.log(data)
        const imagefile={image:data.image[0]}
        const res=await axiospublic.post(image_hosting_api,imagefile,{
          headers:{
            'content-type':'multipart/form-data'
          }
        })

        if(res.data.success){
         const menuitem={
          name:data.name,
          category:data.category,
          price:parseFloat(data.price),
          recipe:data.recipe,
          image:res.data.data.display_url
         }
         const menures=await axiossecure.patch(`/menu/${_id}`,menuitem)
         console.log(menures.data)
         if(menures.data.insertedId){
          Swal.fire({
            title: "Good job!",
            text: `${data.name} is successfully inserted`,
            icon: "success"
          });

         }

        }
        console.log(res.data)

    }
    
  
    return (
        <div>
            
<form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Recipe Name</span>
  </label>
  <input defaultValue={name} type="text" {...register("name")} placeholder="Recipe name" className="input input-bordered w-full " /> 
</div>

<div className="flex gap-3">

<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Category</span>
  </label>
  <select  defaultValue="default" {...register('category')} className="select select-bordered w-full max-w-xs">
  <option defaultValue={category} disabled value="default">Category</option>
        <option value="salad">Salad</option>
        <option value="pizza">Pizza</option>
        <option value="dessert">Dessert</option>
        <option value="soup">Soup</option>
        <option value="drinks">Drinks</option>
</select></div>

<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <input type="number" defaultValue={price} {...register("price")} placeholder="Price" className="input input-bordered w-full " /> 
</div>

</div>
<div className="form-control">
  <label className="label">
    <span className="label-text">Recipe Details</span>
  </label>
  <textarea  defaultValue={recipe} {...register("recipe")} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
</div>

<input defaultValue={image}  {...register("image")} type="file" className="file-input flex  mt-5 file-input-bordered lg:w-1/2 " />
      <button className="btn mt-5 flex">Update Item</button>
    </form>
            
        </div>
    );
};

export default Upadte;