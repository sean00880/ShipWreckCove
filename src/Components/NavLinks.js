import {Link} from 'react-scroll'
import {motion} from 'framer-motion';


const NavLinks = () => {
    return (
        <ul className="nav-items">
        
        <li className="nav-item">
            <Link activeClass="active-menu" smooth to="HeaderSection" spy={true} offset={-100} >Home</Link>
        </li>
        <li className="nav-item">
            <Link activeClass="active-menu" smooth to="AboutSection" spy={true} offset={-100}>About</Link>
        </li>
        <li className="nav-item">
        <Link activeClass="active-menu" smooth to="ServicesSection" spy={true} offset={-100}>Community</Link>
        </li>
        <li className="nav-item">
        <Link activeClass="active-menu" smooth  to="recommended" spy={true} offset={950}>Gems</Link>
        </li>
        <li className="nav-item">
        <Link activeClass="active-menu"smooth  to="partners" spy={true} offset={-200}>Partners</Link>
        </li>
        <li className="nav-item">
        <Link activeClass="active-menu" smooth to="contact" spy={true} offset={-150}>Contact</Link>
        </li>
    </ul>
    );
}

export default NavLinks;