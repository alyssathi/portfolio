import React from "react"
import { projectsArray } from "./projectsArray"
import { ProjectCard } from "../projectCard"

export function ProjectList() {
  return (
    <div>
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