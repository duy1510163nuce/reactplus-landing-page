import { FC, ReactElement } from "react";
import {listProjects} from 'app/constant/mockApi'
import Project from "app/components/elements/project/Project";
import {ArrowLeftOutlined  ,ArrowRightOutlined  } from "@ant-design/icons"

const Right:FC = ():ReactElement =>{
    return (
        <div className="right">
            <div className="right-list">
                {listProjects.map((pro) =>{
                    return(
                        <Project {...pro} key={pro.id}/>
                    )
                })}
            </div>
            <div className="right-btn">
                <button className="btn-item"><ArrowLeftOutlined /> Back</button>
                <button className="btn-item">Next <ArrowRightOutlined /> </button>
            </div>
        </div>
    )
}
export default Right;