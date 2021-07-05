import React from "react"
import { ProjectList } from "./projectList"
import * as projectStyles from "./projects.module.scss"
export function Projects() {
  return (
    <div className={projectStyles.container} id="projects">
      <h3>Projects</h3>
      <div className={projectStyles.projectContainer}>
        <ProjectList />
      </div>
    </div>
  )
}
