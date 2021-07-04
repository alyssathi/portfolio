import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import * as headerStyles from "./header.module.scss"

export function Header() {
  return (
    <header className={headerStyles.headerContainer}>
      <nav>
        <ul className={headerStyles.listContainer}>
          <div className={headerStyles.listContainerLeft}>
            <li className={headerStyles.listItemLeft}>
              <AnchorLink to="/#landing" className={headerStyles.listItemText}>
                AlyssaThi
              </AnchorLink>
            </li>
          </div>
          <div className={headerStyles.listContainerRight}>
            <li className={headerStyles.listItemRight}>
              <AnchorLink to="/#projects" className={headerStyles.listItemText}>
                Projects
              </AnchorLink>
            </li>
            <li className={headerStyles.listItemRight}>
              <AnchorLink to="/#contact" className={headerStyles.listItemText}>
                Contact
              </AnchorLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}
