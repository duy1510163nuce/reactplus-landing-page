import { FC, ReactElement } from "react";
import Banner from "../elements/banner/Banner";
import Header from "./header/Header";
import Reputation from "./reputation/Reputation";
import User from "./user/User";


const HomeContainer:FC = ():ReactElement =>{
    return(
        <div className="homeContainer">
            <Header/>   
            <Banner/>
            <Reputation/>
            <User/>
        </div>
    )
}

export default HomeContainer;