import React from "react"
import * as aboutStyles from "./about.module.scss"

export function About() {
  return (
    <div className={aboutStyles.container}>
      <h3>About Me</h3>
      <p>
        Hi! My name is <span className={aboutStyles.bold}>Alyssa Thi</span>. I’m
        a frontend developer and I'm currently looking to join a team. Right
        now, I'm using React/Typescript with serverless providers such as
        Netlify and Firebase.
      </p>

      <p>
        Outside of the computer, I enjoy:
        <ul>
          <li>
            playing soccer. I’m a goalkeeper- let me know if you ever need a
            fill in for your team!
          </li>
          <li>
            SCUBA diving. Here’s a selfie with a turtle! (HOVER OVERLAY: TURTLE
            PIC!!!) I got my Dive Masters in Airlie Beach, QLD.
          </li>
          <li>
            playing games. My favorite video game is BOTW and my favorite board
            game is Catan.
          </li>
        </ul>
      </p>
      <p>
        Contact me here if you want to recruit me for your soccer team or
        software development team... either one works for me!
      </p>
    </div>
  )
}
