import React from "react"
import { useState } from "react"
import { Contact, Landing, Layout, Projects } from "../components"

export const ThemeContext = React.createContext()

export const themeHelper = (theme, x, y) => (theme === "dark" ? x : y)

export default function Index() {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Layout>
        <Landing />
        <Projects />
        <Contact />
      </Layout>
    </ThemeContext.Provider>
  )
}
