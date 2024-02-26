// Footer.jsx
import '../assets/css/Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="site-footer"> {/* Use className instead of class in JSX */}
        
            <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by EventHub.
            </p>
    </footer>
  );
};

export default Footer;
