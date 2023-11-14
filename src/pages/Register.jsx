import { NavLink, useNavigate } from "react-router-dom";
import Useauth from "../Hook.jsx/Useauth";
import Swal from "sweetalert2";

const Register = () => {
    const {createregister,updateprofile}=Useauth()
    // const navigate=useNavigate()

    const handleregister = e => {

        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const photo = e.target.photo.value
       
        console.log(email, password, name,photo)
        createregister(email,password)
        .then(()=>{
            Swal.fire(
                'Good job!',
                'You have Successfully Register!',
                'success'
              )
             

              // navigate('/')
        })
        .catch(()=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        })

        updateprofile(name,photo)  
        .then(()=>console.log('userprofile info update'))
        .catch(error=>console.log(error))
    }
    return (
        <div>
        <div className="max-w-[1200px] mx-auto">
        <div className="">
        </div>
        <div className="lg:flex items-center">
        <div className="lg:w-1/4">
           
        </div>
        <div className="hero min-h-screen ">
            
        <div className="hero-content flex-col lg:w-3/4 my-10 bg-sky-950 ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">Register now!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full    shadow-2xl bg-base-100">
            <div className="card-body bg-teal-600 ">
                <form onSubmit={handleregister} className="lg:w-1/2 mx-auto" >
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">Name</span>
                </label>
                <input type="text" placeholder="name" required name="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">photo url</span>
                </label>
                <input type="url" placeholder="photo url" required name="photo" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">Email</span>
                </label>
                <input type="email" placeholder="email" required name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">Password</span>
                </label>
                <input type="password" placeholder="password" required name="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                
                    <button className="btn btn-primary ">Register</button>
              </div>
              <div className=" my-5">
                <p className="text-white">Complete regiter? 

                 <span className="text-rose-600 font-bold text-xl"><NavLink to="/login">Login</NavLink> </span>
                 </p> 
              </div>
              <hr />
              


              </form>
            </div>
           
          </div>
        </div>
      </div>
      </div>
      </div>

      
</div>
    );
};

export default Register;