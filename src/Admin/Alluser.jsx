import { useQuery } from "@tanstack/react-query";
import Useaxios from "../Hook/Useaxios";
import { AiOutlineDelete, AiOutlineUser } from "react-icons/ai";
import Swal from "sweetalert2";


const Alluser = () => {
    const axiossecure=Useaxios()
    const {data:user=[],refetch}=useQuery({
        queryKey:['user'],
        queryFn:async ()=>{
            const res= await axiossecure.get('/user',{
                headers:{
                    Authorization:`Bearer`
                }
            })
            return res.data

        }
    })

    const handleAdmin=user=>{
        axiossecure.patch(`/user/admin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });

            }
        })

    }



    const handledelete=id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiossecure.delete(`/user/${id}`)
              .then(res=>{
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });

                }
              })
            }
          });
}



    return (
        <div className="space-y-10">
        <div className="flex justify-evenly">
            <h1 className="text-4xl font-bold">All user</h1>
            <h1 className="text-4xl font-bold">Total user {user.length}</h1>
        </div>

        <div className="overflow-x-auto rounded-lg">
  <table className="table ">
    {/* head */}
    <thead className="bg-orange-400 ">
      <tr>
        <th>
         #
        </th>
        <th className="text-xl font-bold">Name</th>
        <th className="text-xl font-bold">Email</th>
        <th className="text-xl font-bold">Role</th>
        <th className="text-xl font-bold">Action</th>
      </tr>
    </thead>
    <tbody>

        {
            user.map((item,index)=>
                <tr key={item._id}>
                <th>
                  {index +1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    
                      <div>
                        <h1>{item.name}</h1>
                    </div>
                  </div>
                </td>
                <td>
                {item.email}
                  
                </td>

                <th>
                    
                { 
                item.role ==='admin'?'Admin':
                <button onClick={()=>handleAdmin(item)}  className="btn  bg-orange-400">
                 <  AiOutlineUser className=" text-xl  text-red-600"></AiOutlineUser>
                  </button>
                 }
                </th>

                <th>
                    
                  <button onClick={()=>handledelete(item._id)}  className="btn btn-ghost btn-xs">
                 <  AiOutlineDelete className=" text-2xl text-red-600"></AiOutlineDelete>
                  </button>
                </th>
              </tr>
                )
        }
      {/* row 1 */}
    
    </tbody>
  </table>
</div>

        </div>
    );
};

export default Alluser;