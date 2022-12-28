import { FC, ReactElement } from "react";
import 'app/styles/achievement/Achievement.scss'
import Left from "./left/Left";
import Right from "./right/Right";


const Achievement:FC = ():ReactElement =>{
    return (
        <div className="achievement">
            <Left/>
            <Right/>
        </div>
    )
}

export default Achievement;