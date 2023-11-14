import { AiOutlineCalendar, AiOutlineFileAdd, AiOutlineHome, AiOutlineOrderedList, AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
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
                             My Cart</NavLink>
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

                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;