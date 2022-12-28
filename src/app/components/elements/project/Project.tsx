import { FC, ReactElement } from "react";

type projectPropsType = {
    id: number,
    img: string,
    name: string,
    date: string,
}

const Project:FC<projectPropsType> = ( pro):ReactElement =>{
    return (
        <div className="project" key= {pro.id}>
            <img alt="Project-img" src={pro.img} className="project-img"/>
            <div className="project-content">
                <h1 className="project-name">{pro.name}</h1>
                <p className="project-date">{pro.date}</p>
            </div>
        </div>
    )
}

export default Project;