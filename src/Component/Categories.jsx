
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../assets/home/slide1.jpg'
import img2 from '../assets/home/slide2.jpg'
import img3 from '../assets/home/slide3.jpg'
import img4 from '../assets/home/slide4.jpg'
import img5 from '../assets/home/slide5.jpg'

const Categories = () => {
    return (
        <div>
            < div className=' w-1/2 mx-auto space-y-10 p-10'>
                <h1 className='text-yellow-500 font-bold border-b-4 pb-4 text-3xl'>---From 11:00am to 10:00pm---</h1>
                
                <h1 className='text-4xl  border-b-4 pb-4  font-bold'>ORDER ONLINE</h1>
            </div>
        <div className='p-5'>

<Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
        </SwiperSlide>
       
        
      </Swiper>
            
        </div>
        </div>
    );
};

export default Categories;