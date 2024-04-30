// FooterLinks.js
import {NavLink} from 'react-router-dom';
import './FooterLinks.css';

const FooterLinks = () => {
    return (
        <div className="footer-links">
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            <NavLink to="/terms">Terms of Service</NavLink>
        </div>
    );
};

export default FooterLinks;
