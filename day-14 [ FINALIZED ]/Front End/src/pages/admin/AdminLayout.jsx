import React from 'react'
import propTypes from 'prop-types';
import AdminSideBar from '../../components/AdminSideBar'
import '../../assets/css/admin.css';
const AdminLayout = ({children}) => {
  return (
    <div className="admin_container">
    <AdminSideBar/>
    <div className='admin_main'>
    {children}
    </div>
    </div>
  )
}
AdminLayout.propTypes={
  children:propTypes.node.isRequired
}

export default AdminLayout