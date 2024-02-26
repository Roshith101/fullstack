import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const UserLayout = ({children}) =>{
    return (
        <div className="container">
            <header>
                <Header />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
UserLayout.propTypes={
    children: PropTypes.node.isRequired
}
export default UserLayout