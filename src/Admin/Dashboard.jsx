import { AiOutlineBook, AiOutlineCalendar, AiOutlineContacts, AiOutlineFileAdd, AiOutlineHome, AiOutlineMenu, AiOutlineOrderedList, AiOutlineShoppingCart, AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import Usecart from "../pages/Usecart";
import Useradmin from "../Hook.jsx/Useradmin";

const Dashboard = () => {
    const [cart]=Usecart()
    const isAdmin=Useradmin()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen  bg-orange-400">
                <ul className="menu space-y-5">

                    {
                      isAdmin  ?
                      <>
                        <li>
                     <NavLink to="/dashboard/adminhome">
                      <AiOutlineHome/>

                        Admin Home</NavLink>
                   </li>


                    <li>
                        <NavLink to="/dashboard/additem">
                        <AiOutlineShoppingCart></AiOutlineShoppingCart>
                             Add Item</NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/manage">
                        <AiOutlineOrderedList/>
                             Manage Item</NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/booking">
                        <AiOutlineBook/>

                             My Bookings</NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/users">
                        <AiOutlineUsergroupAdd/>
                             All Users</NavLink>
                    </li>

                      </>
                       :
                       <>

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

                       </>
                    }
               

                    <div className="divider "></div>

                    <li>
                     <NavLink to="/">
                      <AiOutlineHome/>

                        User Home</NavLink>
                   </li>

                   <li>
                     <NavLink to="/order">
                      <AiOutlineMenu></AiOutlineMenu>

                        Menu</NavLink>
                   </li>
                   <li>
                     <NavLink to="/order/contact">
                      <AiOutlineContacts></AiOutlineContacts>

                        Conatact</NavLink>
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