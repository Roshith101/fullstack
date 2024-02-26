import "../../assets/css/adminnav.css";
import logo_light from '../../assets/images/Event.png';
import { IoMdLogOut } from "react-icons/io";
import search_icon_light from '../../assets/images/Search.png';
import {Link} from 'react-router-dom';


const AdminNav = () => {

  return (
    <div className='navbar1'>
        <img src={ logo_light} alt='' className='logo1'/>
        <ul>
        <Link to="/eventhub/admin/home"><li>Home</li></Link>
        <Link to="/eventhub/admin/dashboard"><li>Dashboard</li></Link>
        <Link to="/eventhub/admin/Event"><li className="features-link">Add Events</li></Link>
        <Link to="/eventhub/admin/bookings"><li> All Bookings</li></Link>
        </ul>
        <div className='search-box1'>
        <input type="text" placeholder='Search'/>
        <img src={ search_icon_light} alt=""/>
        </div>
       <Link to= "/"> <div className="log"><IoMdLogOut /></div></Link>
    </div>
  )
}

export default AdminNav