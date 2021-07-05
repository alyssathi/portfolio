import React from "react"
import { Button } from "../../button"
import * as projectCardStyles from "./projectCard.module.scss"

export function ProjectCard({ title, description, moreInfo, repo, live }) {
  return (
    <div className={projectCardStyles.container}>
      <h4>{title}</h4>
      <div>
        <p>{description}</p>
      </div>
      <div className={projectCardStyles.buttonContainer}>
        <Button
          className={projectCardStyles.buttonStyles}
          buttonName={<p>Live</p>}
          target="_blank"
          buttonFunction={live}
        />
        <Button
          className={projectCardStyles.buttonStyles}
          buttonName={<p>Repo</p>}
          target="_blank"
          buttonFunction={`https://github.com/alyssathi/${repo}`}
        />
      </div>
    </div>
  )
}
