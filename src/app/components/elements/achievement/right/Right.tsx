import { FC, ReactElement } from "react";
import 'app/styles/achievement/Right.scss';



const Right:FC = ():ReactElement => {
    return (
        <div className="right">
            <h1 className="right-title">30 Years Experience</h1>
            <p className="right-content">
                Our company has been the leading provided 
                construction services to clients throughout 
                the USA since 1988
            </p>
            <button className="right-btn">Contact Us</button>
        </div>
    )
}
export default Right;