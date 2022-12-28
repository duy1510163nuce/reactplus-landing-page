import { FC, ReactElement } from "react";
import Logo from "app/components/modules/header/logo/Logo";
import Navbar from "app/components/modules/header/navbar/Navbar";
import 'app/styles/elements/Header.scss'

const Header:FC = ():ReactElement =>{
    return(
        <div className="header">
             <Logo />
             <Navbar/>
        </div>
       
    )

}

export default Header;