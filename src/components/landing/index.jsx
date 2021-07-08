import React from "react"
import { useContext } from "react"
import * as landingStyles from "./landing.module.scss"
import { ThemeContext, themeHelper } from "./../../pages/index"

export function Landing() {
  const [theme] = useContext(ThemeContext)
  return (
    <div
      id="landing"
      className={`${landingStyles.container} ${themeHelper(
        theme,
        landingStyles.containerDark,
        null
      )}`}
    >
      <h1>
        Hi there, I'm <span className={landingStyles.h1TitleBold}>Alyssa</span>.
      </h1>
      <h2>
        I'm a{" "}
        <span
          className={`${landingStyles.fed} ${themeHelper(
            theme,
            landingStyles.fedDark,
            null
          )}`}
        >
          frontend developer
        </span>{" "}
        based in{" "}
        <span
          className={`${landingStyles.perth} ${themeHelper(
            theme,
            landingStyles.perthDark,
            null
          )}`}
        >
          Perth
        </span>{" "}
        looking to be a part of a team that creates{" "}
        <span
          className={`${landingStyles.functional} ${themeHelper(
            theme,
            landingStyles.functionalDark,
            null
          )}`}
        >
          {" "}
          responsive & functional
        </span>{" "}
        user interfaces using{" "}
        <span
          className={`${landingStyles.react} ${themeHelper(
            theme,
            landingStyles.reactDark,
            null
          )}`}
        >
          React/Typescript
        </span>{" "}
        and related frameworks.
      </h2>
    </div>
  )
}
