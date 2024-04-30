// FooterLinks.js
import { Link } from 'react-router-dom';
import './FooterLinks.css';

const FooterLinks = () => {
    return (
        <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
        </div>
    );
};

export default FooterLinks;
