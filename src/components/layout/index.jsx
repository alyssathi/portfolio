import React from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import "./layout.scss"

export function Layout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <body style={{ marginTop: "5rem" }}>
        <main>{children}</main>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
