import { FC, ReactElement } from "react";
import Left from "./left/Left";
import Right from "./right/Right";
import 'app/styles/elements/Projects.scss';


const Projects:FC = ():ReactElement =>{
    return (
        <div className="project-list">
            <Left/>
            <Right/>
        </div>
    )
}
export default Projects;