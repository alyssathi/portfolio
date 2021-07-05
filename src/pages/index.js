import React from "react"
import { Contact, Landing, Layout, Projects } from "../components"

export default function Index() {
  return (
    <Layout>
      <Landing />
      <Projects />
      <Contact />
    </Layout>
  )
}
