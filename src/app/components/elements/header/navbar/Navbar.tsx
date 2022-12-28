import { FC, ReactElement } from "react";
import './Navbar.scss';

const Navbar:FC = ():ReactElement =>{
    return(  
        <ul className="navbar">
            <li className="nav-item">Home</li>
            <li className="nav-item">About Us</li>
            <li className="nav-item">Projects</li>
            <li className="nav-item">Services</li>
            <li className="nav-item item-contact">Contact Us</li>
        </ul>  
    )
}
export default Navbar;