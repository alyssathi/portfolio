import React from "react"
import * as landingStyles from "./landing.module.scss"
export function Landing() {
  return (
    <div id="landing" className={landingStyles.container}>
      <h1 className={landingStyles.h1Title}>
        Hi there, I'm <span className={landingStyles.h1TitleBold}>Alyssa</span>.
      </h1>
      <h2 className={landingStyles.h2Title}>
        I'm a <span className={landingStyles.fed}>frontend developer</span>{" "}
        based in <span className={landingStyles.perth}>Perth</span> looking to
        be a part of a team that creates{" "}
        <span className={landingStyles.functional}>
          {" "}
          responsive & functional
        </span>{" "}
        user interfaces using{" "}
        <span className={landingStyles.react}>React/Typescript</span> and
        related frameworks.
      </h2>
    </div>
  )
}
