import { FC, ReactElement } from "react";
import Logo from "app/components/elements/header/logo/Logo";
import Navbar from "app/components/elements/header/navbar/Navbar";
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