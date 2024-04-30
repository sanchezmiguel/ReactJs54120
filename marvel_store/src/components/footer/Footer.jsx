// Footer.js
import FooterLinks from '../footerLinks/FooterLinks';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <FooterLinks /> {/* Use the FooterLinks component here */}

            <div className="footer-social">
                <a href="https://www.facebook.com/MarvelStore.CoderHouse" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com/MarvelStore.CoderHouse" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.linkedin.com/MarvelStore.CoderHouse/MarvelStore.CoderHouse" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>

            <div className="footer-contact">
                <p>Contact us: <a href="mailto:info@MarvelStore.CoderHouse.com">info@MarvelStore.CoderHouse.com</a></p>
            </div>

            <div className="footer-newsletter">
                <form>
                    <input type="email" placeholder="Subscribe to our newsletter" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>

            <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} MarvelStore. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
