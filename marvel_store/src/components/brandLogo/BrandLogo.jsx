import logo from "../../images/logo.png";

function BrandLogo() {
    return (
        <a className='navbar-brand' href="/">
            <img alt='logo' src={logo} className='logo' style={{maxWidth: '150px', height: 'auto'}}/>
        </a>
    );
}

export default BrandLogo;
