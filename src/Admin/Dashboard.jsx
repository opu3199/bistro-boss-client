import { AiOutlineCalendar, AiOutlineFileAdd, AiOutlineHome, AiOutlineMenu, AiOutlineOrderedList, AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import Usecart from "../pages/Usecart";

const Dashboard = () => {
    const [cart]=Usecart()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen  bg-orange-400">
                <ul className="menu space-y-5">
                 <li>
                     <NavLink to="/dashboard/home">
                      <AiOutlineHome/>

                        User Home</NavLink>
                   </li>


                    <li>
                        <NavLink to="/dashboard/Cart">
                        <AiOutlineShoppingCart/>
                             My Cart ({cart.length})</NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/reservation">
                        <AiOutlineCalendar/>
                             Reservation</NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/reviwe">
                        <AiOutlineFileAdd/>

                             Add Review</NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/bookings">
                        <AiOutlineOrderedList/>
                             My Bookings</NavLink>
                    </li>

                    <div className="divider "></div>

                    <li>
                     <NavLink to="/dashboard/home">
                      <AiOutlineHome/>

                        User Home</NavLink>
                   </li>

                   <li>
                     <NavLink to="/order">
                      <AiOutlineMenu></AiOutlineMenu>

                        Menu</NavLink>
                   </li>

                  

                </ul>

              

            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;