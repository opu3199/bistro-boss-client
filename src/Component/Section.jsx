
import image from '../assets/home/chef-service.jpg'
const Section = () => {
    return (
        <div className='mb-5 '>
            <img className='' src={image} alt="" />
            <div className='bg-white p-7 lg:w-1/2 space-y-4 lg:absolute lg:-mt-60  lg:ml-44 mx-auto border-2 '>
                <h1 className='text-4xl font-bold'>Bistro Boss</h1>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Section;