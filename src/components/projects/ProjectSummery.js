import React from 'react'

export default function ProjectSummery({project}) {
    return (
        <div className="card z-depth-0 project-summery">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>posted by Kanyatta</p>
          <p className="grey-text"> 15 July,2020</p>
        </div>
      </div>
    )
}
