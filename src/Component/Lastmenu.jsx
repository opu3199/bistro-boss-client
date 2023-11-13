import featured from '../assets/home/featured.jpg'

const Lastmenu = () => {
    return (
        <div className="my-10 text-white bg-fixed  p-10 bg-[url('https://i.ibb.co/MD2PW7p/featured.jpg')] bg-cover bg-center h-screen ">
            < div className=' w-1/2 mx-auto space-y-10 p-10'>
                <h1 className='text-yellow-500 font-bold border-b-4 pb-4 text-3xl'>---Check it out---</h1>

                <h1 className='text-4xl  border-b-4 pb-4  font-bold'>FROM OUR MENU</h1>
            </div>
            <div className='lg:flex bg-slate-500 bg-opacity-75  items-center gap-5 '>
                <img className='w-[500px]' src={featured} alt="" />
                <div className=' p-5 space-y-3'>
                    <h3 className='text-xl font-bold'>March 20, 2023</h3>
                    <h1 className='text-2xl font-bold'>WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='mt-10 btn btn-outline border-0  border-b-8 text-xl font-bold'>Read More</button>
                </div>
            </div>


        </div>
    );
};

export default Lastmenu;