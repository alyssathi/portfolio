import React from "react"
import { About, Contact, Landing, Layout, Projects } from "../components"

export default function Index() {
  return (
    <Layout>
      <Landing />
      <Projects />
      <Contact />
    </Layout>
  )
}
