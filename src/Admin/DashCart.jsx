import { AiOutlineDelete } from "react-icons/ai";
import Usecart from "../pages/Usecart";


const DashCart = () => {
    const [cart]=Usecart()
    const totalprice=cart.reduce((total,item)=>total+item.price,0)
    return (
        <div>
            <div className="flex justify-evenly">
                <h1 className="text-4xl font-bold">Items: {cart.length}</h1>
                <h1 className="text-4xl font-bold">Total Price: {totalprice}</h1>
                <button className="btn btn-primary">Pay</button>
            </div>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th className="text-xl font-bold">Image</th>
        <th className="text-xl font-bold">Name</th>
        <th className="text-xl font-bold">Price</th>
        <th className="text-xl font-bold">Action</th>
      </tr>
    </thead>
    <tbody>

        {
            cart.map((item,index)=>
                <tr key={item._id}>
                <th>
                  {index +1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                {item.name}
                  
                </td>
                <td>{item.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs  ">
                 <  AiOutlineDelete className=" text-xl text-red-600"></AiOutlineDelete>
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

export default DashCart;