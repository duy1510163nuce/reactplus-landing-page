import { FC, ReactElement, useState } from "react";
import {  ReasonsType } from "../../../types/RepuType";
import avtUser from '../../../../public/images/Vector.png'
import avtX from '../../../../public/images/Vector x.png'
import Reason from "../../modules/reason/Reason";
import '../reputation/Reputaition.scss'

const Reputation:FC = ():ReactElement => {
    const listReason:ReasonsType[] =[
        {
            img: avtUser,
            title: 'Best Services',
            description: 'Nullam senectus porttitor in eget. Eget rutrum leo interdum.'
        },
        {
            img: avtUser,
            title: 'Best Teams',
            description: 'Cursus semper tellus volutpat aliquet lacus. '
        },
         {
            img: avtX,
            title: 'Best Designs',
            description: 'Ultricies at ipsum nunc, tristique nam lectus. '
        }
        
    ]
    return(
        <div className="reputation">
            <h1 className="repu-title">Our Reputation</h1>
            <div className="list-reasons">
                {listReason.map((reason,key) =>{
                return(
                    
                    <Reason {...reason} key = {key} />
                )
            })}  
            </div>          
        </div>

    )
}

export default Reputation;