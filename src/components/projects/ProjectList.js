import React from "react";
import ProjectSummery from "./ProjectSummery";
import { Link } from "react-router-dom";
export default function ProjectList ({projects}) {
  return (
    
    <div className="project-list-section">
      {projects && projects.map(project => {
        
        return (
          <Link to ={'/project/' + project.id}>
          <ProjectSummery project={project} key={project.id}/> </Link>
       )
      
      })}
    </div>
  );
}


