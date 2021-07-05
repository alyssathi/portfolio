import React from "react"
import { projectsArray } from "./projectsArray"
import { ProjectCard } from "../projectCard"
import * as projectListStyles from "./projectList.module.scss"

export function ProjectList() {
  return (
    <div className={projectListStyles.container}>
      {projectsArray.map(project => {
        return (
          <ProjectCard
            title={project.title}
            description={project.description}
            live={project.live}
            repo={project.repo}
          />
        )
      })}
    </div>
  )
}
