import React from "react"
import { useContext } from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { ThemeContext, themeHelper } from "../../pages"
import "./layout.scss"

export function Layout({ children }) {
  const [theme] = useContext(ThemeContext)
  const darkModeBody = themeHelper(
    theme,
    {
      backgroundColor: "#2f3d54",
      color: "white",
    },
    null
  )

  return (
    <>
      <body style={darkModeBody}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  )
}
