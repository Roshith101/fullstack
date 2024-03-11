import React from 'react'
import '../assets/css/adminsidebar.css';
import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from 'react-router-dom';
const AdminSideBar = () => {
  return (
    <div className='side-box'>
    <h2><MdAdminPanelSettings /> Admin Portal</h2>
    <ul>
    <li>DashBoard</li>
    <Link to="/eventhub/admin/managefood"><li>Manage Food</li></Link>
    <li>Manage Venue</li>
    <li>Manage Themes</li>/ 
    </ul>
    </div>
  )
}

export default AdminSideBar