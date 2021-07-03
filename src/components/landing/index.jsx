import React from "react"
import * as landingStyles from "./landing.module.scss"
export function Landing() {
  return (
    <div className={landingStyles.container}>
      <h1 className={landingStyles.h1Title}>
        Hi there, I'm <span className={landingStyles.h1TitleBold}>Alyssa</span>.
      </h1>
      <h2 className={landingStyles.h2Title}>
        I'm a frontend developer based in Perth looking to be a part of a team
        that creates responsive & functional user interfaces using
        React/Typescript and related frameworks.
      </h2>
    </div>
  )
}
