import { useState } from 'react';
import "../assets/css/Header.css";
import logo_light from '../assets/images/Event.png';
import search_icon_light from '../assets/images/Search.png';
import profile_icon from '../assets/images/account_blue.png';
// import { MdDashboard } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import {Link} from 'react-router-dom';


const Header = () => {
const[showSidebar,setShowSidebar]=useState(false);

const toggleSidebar=()=>{
  setShowSidebar(!showSidebar);
};

  return (
    <div className='navbar'>
        <img src={ logo_light} alt='' className='logo'/>
        <ul>
        <Link to="/eventhub/user/home"><li> Home</li></Link>
        <Link to="/eventhub/user/about"><li>About Us</li></Link>
        <Link to="/eventhub/user/Event"><li>Events</li></Link>
        </ul>
        <div className='search-box'>
        <input type="text" placeholder='Search'/>
        <img src={ search_icon_light} alt=""/>
        </div>
        <img src={profile_icon} alt=""  className='p_icon' onClick={toggleSidebar}/>
        {showSidebar &&(
        <div className='sidebar'>
        <ul>
        <Link to = "/eventhub/user/editprofile"><li> <ImProfile /> Edit profile</li></Link>
        <Link to = ""><li><FaShoppingCart /> My Bookings</li></Link>
        <Link to = "/"><li><IoMdLogOut /> Logout</li></Link>
        </ul>
        </div>
        )}
      
    </div>
  )
}

export default Header