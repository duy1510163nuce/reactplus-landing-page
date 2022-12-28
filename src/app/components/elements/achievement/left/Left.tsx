import  { FC, ReactElement } from 'react'
import 'app/styles/achievement/Left.scss'
import { listAchievement } from 'app/constant/mockApi'
import History from 'app/components/elements/achievement/left/history/History'
  
export type ReasonPropsType = {
    key: number,
    name: string,
    Image: string,
    title: string,
}

const Left:FC = ():ReactElement =>{
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
export default Left;
