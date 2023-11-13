/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Menucategories = ({items}) => {
    return (
        <div className="">
            
            <div className="grid lg:grid-cols-2 gap-8 ">
                {
                    items.map(popular=><div  className=" flex  gap-5"  key={popular._id}>
                        
                            
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
            <Link to="/order">
            <button className='mb-10 mt-10 btn btn-outline border-0  border-b-8 text-xl font-bold'>Order Our Favourite Food</button>

            </Link>

            
        </div>
    );
};

export default Menucategories;