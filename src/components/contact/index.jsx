import React from "react"
import * as contactStyles from "./contact.module.scss"
import { Button } from "../button"

export function Contact() {
  return (
    <div className={contactStyles.container}>
      <h3>Contact & Socials</h3>
      <div className={contactStyles.buttonContainer}>
        <Button
          buttonName="Email"
          target="_blank"
          buttonFunction="mailto:aruefenacht14@gmail.com"
        />
        <Button
          buttonName="Twitter"
          target="_blank"
          buttonFunction="https://twitter.com/lyssthi"
        />
        <Button
          buttonName="Github"
          target="_blank"
          buttonFunction="https://github.com/alyssathi"
        />
        <Button
          buttonName="LinkedIn"
          target="_blank"
          buttonFunction="https://www.linkedin.com/in/alyssa-ruefenacht-456b34139/"
        />
      </div>
    </div>
  )
}
