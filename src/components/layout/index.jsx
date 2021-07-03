import React from "react"
import Header from "./header"
import "./layout.scss"

export function Layout({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <body>
        <main>{children}</main>
        <footer>Made by Alyssa</footer>
      </body>
    </div>
  )
}
