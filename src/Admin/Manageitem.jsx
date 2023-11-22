import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import Hook from "../Hook/Hook";
import Useaxios from "../Hook/Useaxios";
import { Link } from "react-router-dom";
const Manageitem = () => {
    const [menu]=Hook()
   const axiossecure=Useaxios()

    const handledelete=item=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiossecure.delete(`/menu/${item._id}`);
                console.log(res.data)  
       
            //   .then(res=>{
            //     if(res.data.deletedCount > 0){
            //         refetch()
            //         Swal.fire({
            //             title: "Deleted!",
            //             text: "Your file has been deleted.",
            //             icon: "success"
            //           });

            //     }
            //   })
            }
          });
}

    return (
        <div>
             <div className="w-1/2 mx-auto space-y-4 ">
          <h1 className="text-xl font-bold text-amber-300">What New</h1>
          <hr />
          <h1 className="text-3xl font-bold">Manage Item</h1>
          <hr />
        </div>
        <div>
        <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
       #
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        menu.map((item,index)=>
            <tr key={item._id}>
            <th>
             {index +1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                </div>
              </div>
            </td>
            <td>
              {item.name}
              
            </td>
            <td>{item.price}</td>
            <th>
               <Link to={`/dashboard/update/${item._id}`}>
               <button   className="btn  bg-orange-400">
                 <  AiOutlineEdit className=" text-xl  text-red-600"></AiOutlineEdit>
                  </button> 
               </Link>
                  </th>           
    
            <th>
            <button onClick={()=>handledelete(item)} className="btn btn-ghost btn-xs  ">
                 <  AiOutlineDelete className=" text-xl text-red-600"></AiOutlineDelete>
                  </button>
            </th>
          </tr>
         
        )
    }
     
    
    </tbody>
   
    
  </table>
</div>
        </div>
            
        </div>
    );
};

export default Manageitem;