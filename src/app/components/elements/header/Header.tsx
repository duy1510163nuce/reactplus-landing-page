import { FC, ReactElement } from "react";
import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";
import './Header.scss'

const Header:FC = ():ReactElement =>{
    return(
        <div className="header">
             <Logo />
             <Navbar/>
        </div>
       
    )

}

export default Header;