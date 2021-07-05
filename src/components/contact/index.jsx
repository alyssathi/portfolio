import React from "react"
import * as contactStyles from "./contact.module.scss"
import { Button } from "../button"
import { FaTwitter, FaLinkedin } from "react-icons/fa"
import { SiGithub } from "react-icons/si"
import { MdEmail } from "react-icons/md"

export function Contact() {
  return (
    <div id="contact" className={contactStyles.container}>
      <h3 className={contactStyles.title}>Contact & Socials</h3>
      <div className={contactStyles.buttonContainer}>
        <Button
          buttonName="Email"
          icon={<MdEmail />}
          target="_blank"
          buttonFunction="mailto:aruefenacht14@gmail.com"
        />
        <Button
          buttonName="Twitter"
          icon={<FaTwitter />}
          target="_blank"
          buttonFunction="https://twitter.com/lyssthi"
        />
        <Button
          buttonName="Github"
          icon={<SiGithub />}
          target="_blank"
          buttonFunction="https://github.com/alyssathi"
        />
        <Button
          buttonName="LinkedIn"
          icon={<FaLinkedin />}
          target="_blank"
          buttonFunction="https://www.linkedin.com/in/alyssa-ruefenacht-456b34139/"
        />
      </div>
    </div>
  )
}
