import { FC, ReactElement } from "react";
import "app/styles/elements/Projects.scss";
import Button from "../elements/Button";

type ProjectDetailType = {
  id: number;
  img: string;
  name: string;
  date: string;
};

type ProjectListProps = {
  projects: ProjectDetailType[];
};

const ProjectList: FC<ProjectListProps> = ({ projects }): ReactElement => {
  const ProjectDetail = (project: ProjectDetailType) => {
    return (
      <div className="project" key={project.id}>
        <img alt="Project-img" src={project.img} className="project-img" />
        <div className="project-content">
          <h1 className="project-name">{project.name}</h1>
          <p className="project-date">{project.date}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="project-list">
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
      <div className="right">
        <div className="right-list">
          {projects?.map((project) => {
            return <ProjectDetail {...project} key={project.id} />;
          })}
        </div>
        <div className="right-btn">
          <Button className="btn-item" title="Back" />
          <Button className="btn-item" title="Next" />
        </div>
      </div>
    </div>
  );
};
export default ProjectList;
