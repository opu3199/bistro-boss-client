import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

const Testimonials = () => {
    const [reviwe,setreviwe]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/reviwe')
        .then(res=>res.json())
        .then(data=>setreviwe(data))
    },[])

    return (
        <div>
             < div className=' w-1/2 mx-auto space-y-10 p-10'>
                <h1 className='text-yellow-500 font-bold border-b-4 pb-4 text-3xl'>---What Our Clients Say---</h1>

                <h1 className='text-4xl  border-b-4 pb-4  font-bold'>TESTIMONIALS</h1>
            </div>
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
       {
        reviwe.map(reviwes=><SwiperSlide
        key={reviwes._id}>
            <div className='p-10 space-y-4 mx-20'>
            <Rating className='mx-auto'
      style={{ maxWidth: 180 }}
      value={reviwes.rating}
      readOnly
    />
                <p>{reviwes.details}</p>
                <h1 className='text-xl font-bold text-yellow-500'>{reviwes.name}</h1>
            </div>


        </SwiperSlide>)
       }
      </Swiper>
            </div>
            
        </div>
    );
};

export default Testimonials;