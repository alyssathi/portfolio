import React from "react"
import { Header } from "./header"
import "./layout.scss"

export function Layout({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <body style={{ marginTop: "5rem" }}>
        <main>{children}</main>
        <footer>Made by Alyssa</footer>
      </body>
    </div>
  )
}
