import {useState,useEffect} from 'react'
import "../assets/css/navbar.css"
import logo_light from '../assets/images/Event-Hub-logos-removebg.png'
import { CgProfile } from "react-icons/cg";
// // import logo_dark from '../../assets/images/Event Hub-logos_white.png'
import search_icon_light from '../assets/images/search-w.png'
import profile_icon from '../assets/images/account_blue.png'
import { FiLogOut } from 'react-icons/fi'
import { MdDashboard } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import {Link,useNavigate} from 'react-router-dom';
// import search_icon_dark from '../../assets/images/search-b.png'
// import toogle_light from '../../assets/images/night.png'
// import toogle_dark from '../../assets/images/day.png'

const Navbar = () => {
const[showSidebar,setShowSidebar]=useState(false);

const toggleSidebar=()=>{
  setShowSidebar(!showSidebar);
};
const navigate = useNavigate();
const [showDemo,setShowDemo]=useState(false);
let specify = "";
let names = "";
let userToken = "";
try{
  const userInfo = JSON.parse(localStorage.getItem('user-info'));
  userToken  = userInfo.emailc;
  names = userToken.split('@')[0];
  specify = "admin@gmail.com";
}catch(error){
  console.error('Error parsing userInfo:',error);
}
useEffect(()=>{
  if(userToken=== specify && localStorage.getItem('user-info')){
    setShowDemo(true);
    navigate('/eventhub/admin/dashboard');
  }
},[navigate,specify,userToken])

const handleLogout=()=>{
  localStorage.clear();
  navigate('/');
}

  return (
    <div className='navbar'>
        <img src={ logo_light} alt='' className='logo'/>
        <ul>
        <Link to='/eventhub/user/home'><li>Home</li></Link>
        <li>About Us</li>
        <Link to='/eventhub/user/event'><li>Events</li></Link>
        </ul>
        <div className='search-box'>
        <input type="text" placeholder='Search'/>
        <img src={ search_icon_light} alt=""/>
        </div>
        <img src={profile_icon} alt=""  className='p_icon' onClick={toggleSidebar}/>
        {showSidebar &&(
        <div className='sidebar'>
        <ul>
       <Link to='/eventhub/user/edit_profile'><li><ImProfile />Edit profile</li></Link>
        <li><FaShoppingCart />My Bookings</li>
        <li onClick={handleLogout} ><IoMdLogOut />Logout</li>
        </ul>
        </div>
        )}
      
    </div>
  )
}

export default Navbar