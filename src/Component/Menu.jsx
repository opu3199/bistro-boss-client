import { useEffect, useState } from "react";
import Hook from "../Hook.jsx/Hook";


const Menu = () => {
    const [menu]=Hook()
    const popular=menu.filter(item=>item.category === 'popular')
    // const [menu,setmenu]=useState([])
    // useEffect(()=>{
    //     fetch('data.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularmenu=data.filter(item=>item.category==='popular')
    //         setmenu(popularmenu)
    //     })
            
            
    // },[])
    return (
        <div className="mb-5">
             < div className=' w-1/2 mx-auto space-y-10 p-10'>
                <h1 className='text-yellow-500 font-bold border-b-4 pb-4 text-3xl'>---Check it out---</h1>
                
                <h1 className='text-4xl  border-b-4 pb-4  font-bold'>FROM OUR MENU</h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 ">
                {
                    popular.map(popular=><div  className=" flex  gap-5"  key={popular._id}>
                        
                            
                        <div>
                        <img className="w-[200px]" style={{borderRadius: '0 200px 200px 200px'}} src={popular.image} alt="" />

                        </div>
                        <div className="space-y-3">
                            <h1 className="text-xl font-bold">{popular.name}.................</h1>
                            <p>{popular.recipe}</p>
                        </div>
                        <p className="text-lg font-bold text-amber-400">${popular.price}</p>

                    </div>)
                }
            </div>
            
        </div>
    );
};

export default Menu;