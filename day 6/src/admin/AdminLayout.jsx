import PropTypes from 'prop-types'
// import "../assets/css/admin.css"
import AdminNav from '../admin/AdminNav'
// import Footer from '../../components/Footer'

const AdminLayout = ({children}) =>{
    return ((
        <div className="admin_container">
            <header>
                <AdminNav />
            </header>
            <main>
                {children}
            </main>
            {/* <Footer>
                <Footer />
            </Footer> */}
        </div>
    ))
}

AdminLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default AdminLayout