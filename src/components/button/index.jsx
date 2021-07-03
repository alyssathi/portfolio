import React from "react"
import * as buttonStyles from "./button.module.scss"

export function Button({ buttonName, buttonFunction, target }) {
  return (
    <a
      classname={buttonStyles.buttonLink}
      target={target}
      href={buttonFunction}
    >
      <div className={buttonStyles.buttonContainer}>{buttonName}</div>
    </a>
  )
}
