import React from "react"
import { useContext } from "react"
import { ThemeContext, themeHelper } from "../../../pages"
import { Button } from "../../button"
import * as projectCardStyles from "./projectCard.module.scss"

export function ProjectCard({ title, description, moreInfo, repo, live }) {
  const [theme] = useContext(ThemeContext)

  return (
    <div
      className={`${projectCardStyles.container} ${themeHelper(
        theme,
        projectCardStyles.containerDark,
        null
      )}`}
    >
      <h4>{title}</h4>
      <div>
        <p>{description}</p>
      </div>
      <div className={projectCardStyles.buttonContainer}>
        <Button
          className={projectCardStyles.buttonStyles}
          buttonName={<p style={{ fontSize: "1.5rem" }}>Live</p>}
          target="_blank"
          buttonFunction={live}
        />
        <Button
          className={projectCardStyles.buttonStyles}
          buttonName={<p style={{ fontSize: "1.5rem" }}>Repo</p>}
          target="_blank"
          buttonFunction={`https://github.com/${repo}`}
        />
      </div>
    </div>
  )
}
