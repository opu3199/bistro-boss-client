import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";


const Root = () => {

    const location =useLocation()
    console.log(location)
    const noheaderfooter=location.pathname.includes('/login')
    return (
        <div>
             {noheaderfooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noheaderfooter || <Footer></Footer>}
            
        </div>
    );
};

export default Root;