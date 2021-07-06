import React from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import "./layout.scss"

export function Layout({ children }) {
  return (
    <>
      <body style={{ marginTop: "5rem" }}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
