import { FC, ReactElement } from "react";



const Left:FC = ():ReactElement =>{
    return (
        <div className="left">
            <h1 className="left-title">Projects</h1>
            <div className="left-list">
                    <div className="list-border"></div>
                    <p className="list-name">All</p>
            </div>
            <p className="list-item">Commercial</p>
            <p className="list-item">Residential</p>
            <p className="list-item">Other</p>

        </div>
    )
}
export default Left;