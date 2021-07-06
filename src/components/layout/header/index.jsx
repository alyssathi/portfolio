import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import * as headerStyles from "./header.module.scss"
import { useState } from "react"
import { Modal } from "../.."
import { GiHamburgerMenu } from "react-icons/gi"
import { DarkMode } from "../darkMode"

export function Header() {
  const logo = require("../../../../static/favicon.ico")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={headerStyles.headerContainer}>
      <nav>
        <ul className={headerStyles.listContainer}>
          <AnchorLink to="/#landing">
            <li className={headerStyles.listItemLeft}>
              <img
                src={logo}
                className={headerStyles.image}
                alt="Logo for AlyssaThi.dev"
              />
            </li>
          </AnchorLink>
          <div className={headerStyles.listContainerRight}>
            <li className={headerStyles.listItemDarkmode}>
              <DarkMode />
            </li>
            <AnchorLink to="/#projects" className={headerStyles.listItemText}>
              <li className={headerStyles.listItemRight}>Projects</li>
            </AnchorLink>
            <AnchorLink to="/#contact" className={headerStyles.listItemText}>
              <li className={headerStyles.listItemRight}>Contact</li>
            </AnchorLink>
            <li className={headerStyles.phoneMenu}>
              <button
                className={headerStyles.modalButton}
                onClick={() => setIsMenuOpen(true)}
              >
                <GiHamburgerMenu size="1.5rem" />
              </button>
              <Modal open={isMenuOpen} onClose={closeMenu}>
                <div>
                  <ul>
                    <AnchorLink
                      to="/#projects"
                      onClick={closeMenu}
                      className={headerStyles.listItemText}
                    >
                      <li
                        onClick={closeMenu}
                        className={headerStyles.listItemRightMenu}
                      >
                        Projects
                      </li>
                    </AnchorLink>
                    <AnchorLink
                      to="/#contact"
                      className={headerStyles.listItemText}
                    >
                      <li
                        onClick={closeMenu}
                        className={headerStyles.listItemRightMenu}
                      >
                        Contact
                      </li>
                    </AnchorLink>
                  </ul>
                </div>
              </Modal>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}
