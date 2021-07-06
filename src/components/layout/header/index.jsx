import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import * as headerStyles from "./header.module.scss"
import { useState } from "react"
import { Modal } from "../.."
import { GiHamburgerMenu } from "react-icons/gi"

export function Header() {
  const logo = require("../../../../static/favicon.ico")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={headerStyles.headerContainer}>
      <nav>
        <ul className={headerStyles.listContainer}>
          <div className={headerStyles.listContainerLeft}>
            <li className={headerStyles.listItemLeft}>
              <AnchorLink to="/#landing" className={headerStyles.listItemText}>
                <img
                  src={logo}
                  className={headerStyles.image}
                  alt="Logo for AlyssaThi.dev"
                />
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
                    <li
                      onClick={closeMenu}
                      className={headerStyles.listItemRightMenu}
                    >
                      <AnchorLink
                        to="/#projects"
                        onClick={closeMenu}
                        className={headerStyles.listItemText}
                      >
                        Projects
                      </AnchorLink>
                    </li>
                    <li
                      onClick={closeMenu}
                      className={headerStyles.listItemRightMenu}
                    >
                      <AnchorLink
                        to="/#contact"
                        className={headerStyles.listItemText}
                      >
                        Contact
                      </AnchorLink>
                    </li>
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
