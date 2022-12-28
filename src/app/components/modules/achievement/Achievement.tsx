import { FC, ReactElement } from "react";
import 'app/styles/elements/Achievement.scss'
import { listAchievement } from "app/constant/mockApi";
 export type ReasonPropsType = {
    key: number,
    name: string,
    Image: string,
    title: string,
}

const Achievement:FC = ():ReactElement =>{
   

    const Left:FC = ():ReactElement =>{
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
    return (
        <div className="left">
            {listAchievement.map((history,key)=>{
                return(
                    <History {...history} key={key}/>
                )
            })}
        </div>
    )
    }
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
    return (
        <div className="achievement">
            <Left/>
            <Right/>
        </div>
    )
}

export default Achievement;