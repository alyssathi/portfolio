import React from "react"
import { Link } from "@reach/router"
export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Alyssa</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
