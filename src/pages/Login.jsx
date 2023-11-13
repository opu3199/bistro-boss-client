import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


const Login = () => {
    const captcharef=useRef(null)
    const [disabled,setdisabled]=useState(true)

    useEffect(()=>{
        loadCaptchaEnginge(6); 

    },[])

    const handlelogin=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value 
        console.log(email,password)

        // createsignin(email,password)
        //   .then(()=>{
        //     Swal.fire(
        //         'Good job!',
        //         'You have successfully login!',
        //         'success'
        //       )
        //   })
        //   .catch(()=>{
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'Something went wrong!',
        //         footer: '<a href="">Why do I have this issue?</a>'
        //       })
        //   })
           
    }

    const validatebtn=()=>{
       const user_value = captcharef.current.value
        if(validateCaptcha(user_value)){
            setdisabled(false)
        }

    }

    return (
        <div>
        <div className="bg-teal-700">
        
        </div>
        <div className="hero min-h-screen bg-cyan-200 ">
        <div className="hero-content flex-col lg:w-1/2 my-10 bg-sky-950 ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">Login now!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full    shadow-2xl bg-base-100">
            <div className="card-body bg-fuchsia-950 ">
                <form onSubmit={handlelogin} className="lg:w-1/2 mx-auto" >
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">Email</span>
                </label>
                <input type="email" placeholder="email"  name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">Password</span>
                </label>
                <input type="password" placeholder="password"  name="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input type="text" ref={captcharef} placeholder="Captcha"  name="captcha" className="input input-bordered" />

                <button onClick={validatebtn} className="btn btn-outline btn-xs mt-3 bg-white">Validate</button>

               
               
              </div>
              <div className="form-control mt-6">
                
                    <button disabled={disabled} className="btn btn-primary ">Login</button>
              </div>
              <div className=" my-5">
                <p className="text-white">Are complete register? 

                 <span className="text-blue-600 font-bold text-xl"><NavLink to="/register">Register</NavLink> </span>
                 </p> 
              </div>
              <hr />
              {/* <button onClick={handlegoogle} className="text-4xl text-green-600 w-full flex justify-center bg-white"><AiFillGoogleCircle></AiFillGoogleCircle></button> */}


              </form>
            </div>
           
          </div>
        </div>
      </div>
      </div>
    );
};

export default Login;