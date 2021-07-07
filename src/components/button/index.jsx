import React from "react"
import { useContext } from "react"
import * as buttonStyles from "./button.module.scss"
import { ThemeContext, themeHelper } from "./../../pages/index"

export function Button({ buttonName, buttonFunction, target, icon }) {
  const [theme] = useContext(ThemeContext)

  return (
    <a target={target} href={buttonFunction}>
      <div
        className={`${buttonStyles.buttonContainer} ${themeHelper(
          theme,
          buttonStyles.buttonContainerDark,
          null
        )}`}
      >
        {icon} {buttonName}
      </div>
    </a>
  )
}
