import { FC, ReactElement } from "react";
import { ReasonsType } from "../../../types/RepuType";
import '../reason/Reason.scss'

const Util:FC<ReasonsType> = (reason,key):ReactElement => {
    
    
    return(
        <div className="reason" key={key}>
            <img alt = 'avtUSer' src={reason.img} className="reason-img"/>
            <h1 className="reason-title">{reason.title}</h1>
            <p className="reason-description">{reason.description}</p>
        </div>  
    )
}

export default Util;