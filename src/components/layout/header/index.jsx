import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import * as headerStyles from "./header.module.scss"
import { useState, useContext } from "react"
import { ThemeContext, themeHelper } from "../../../pages"
import { Modal } from "../.."
import { GiHamburgerMenu } from "react-icons/gi"
import { DarkMode } from "../darkMode"

export function Header() {
  const logo = require("../../../../static/favicon.ico")
  const logoDark = require("../../../../static/AlyssaThiWhite.png")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  const [theme] = useContext(ThemeContext)

  return (
    <header
      className={`${headerStyles.headerContainer} ${themeHelper(
        theme,
        headerStyles.headerContainerDark,
        null
      )}`}
    >
      <nav>
        <ul className={headerStyles.listContainer}>
          <AnchorLink to="/#landing">
            <li className={headerStyles.listItemLeft}>
              <img
                src={themeHelper(theme, logoDark, logo)}
                className={`${headerStyles.image} ${themeHelper(
                  theme,
                  headerStyles.imageDark,
                  null
                )}`}
                alt="Logo for AlyssaThi.dev"
              />
            </li>
          </AnchorLink>
          <div className={headerStyles.listContainerRight}>
            <li className={headerStyles.listItemDarkmode}>
              <DarkMode />
            </li>
            <AnchorLink to="/#projects" className={headerStyles.listItemText}>
              <li
                className={`${headerStyles.listItemRight} ${themeHelper(
                  theme,
                  headerStyles.listItemRightDark,
                  null
                )}`}
              >
                Projects
              </li>
            </AnchorLink>
            <AnchorLink to="/#contact" className={headerStyles.listItemText}>
              <li
                className={`${headerStyles.listItemRight} ${themeHelper(
                  theme,
                  headerStyles.listItemRightDark,
                  null
                )}`}
              >
                Contact
              </li>
            </AnchorLink>
            <li className={headerStyles.phoneMenu}>
              <button
                className={`${headerStyles.modalButton} ${themeHelper(
                  theme,
                  headerStyles.modalButtonDark,
                  null
                )}`}
                onClick={() => setIsMenuOpen(true)}
              >
                <GiHamburgerMenu
                  size="1.5rem"
                  color={themeHelper(theme, "white", "black")}
                />
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
                        className={`${
                          headerStyles.listItemRightMenu
                        } ${themeHelper(
                          theme,
                          headerStyles.listItemRightMenuDark,
                          null
                        )}`}
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
                        className={`${
                          headerStyles.listItemRightMenu
                        } ${themeHelper(
                          theme,
                          headerStyles.listItemRightMenuDark,
                          null
                        )}`}
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
