import { FC, ReactElement } from "react";
import { ReasonPropsType } from "app/components/elements/achievement/left/Left";
import 'app/styles/achievement/History.scss'

const History:FC<ReasonPropsType> = (history):ReactElement =>{
    
    return (
        <div className='history'>
            <img alt="img-history" src={history.Image}  className='img-history' />
            <p className="his-name">{history.name}</p>
            <div className="his-footer">
                <div className="his-border"></div>
                <p className="his-title">{history.title}</p>
            </div>
        </div>
    )
}
export default History;