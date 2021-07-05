import React from "react"
import * as buttonStyles from "./button.module.scss"

export function Button({ buttonName, buttonFunction, target, icon }) {
  return (
    <a
      classname={buttonStyles.buttonLink}
      target={target}
      href={buttonFunction}
    >
      <div className={buttonStyles.buttonContainer}>
        {icon} {buttonName}
      </div>
    </a>
  )
}
