import { FC, ReactElement } from "react";
import box from 'public/images/box.png';
import theBox from 'public/images/TheBox.png';
import 'app/styles/header/Logo.scss'
const Logo:FC = ():ReactElement =>{
    return(
        <div className="logo">
            <img alt="logo-box" src={box} className ="logo-box"/>
            <img alt="logo-text" src={theBox} className ="logo-text"/> 
        </div>
    )
        
}

export default Logo;