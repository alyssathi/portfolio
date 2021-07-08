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
        <div className={headerStyles.listContainer}>
          <AnchorLink to="/#landing">
            <div className={headerStyles.listItemLeft}>
              <img
                src={themeHelper(theme, logoDark, logo)}
                className={`${headerStyles.image} ${themeHelper(
                  theme,
                  headerStyles.imageDark,
                  null
                )}`}
                alt="Logo for AlyssaThi.dev"
              />
            </div>
          </AnchorLink>
          <div className={headerStyles.listContainerRight}>
            <div className={headerStyles.listItemDarkmode}>
              <DarkMode />
            </div>
            <AnchorLink to="/#projects" className={headerStyles.listItemText}>
              <div
                className={`${headerStyles.listItemRight} ${themeHelper(
                  theme,
                  headerStyles.listItemRightDark,
                  null
                )}`}
              >
                Projects
              </div>
            </AnchorLink>
            <AnchorLink to="/#contact" className={headerStyles.listItemText}>
              <div
                className={`${headerStyles.listItemRight} ${themeHelper(
                  theme,
                  headerStyles.listItemRightDark,
                  null
                )}`}
              >
                Contact
              </div>
            </AnchorLink>
            <div className={headerStyles.phoneMenu}>
              <button
                aria-label="Hamburger Menu"
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
                  <div>
                    <AnchorLink
                      to="/#landing"
                      className={headerStyles.listItemText}
                    >
                      <div
                        onClick={closeMenu}
                        className={`${
                          headerStyles.listItemRightMenu
                        } ${themeHelper(
                          theme,
                          headerStyles.listItemRightMenuDark,
                          null
                        )}`}
                      >
                        Home
                      </div>
                    </AnchorLink>
                    <AnchorLink
                      to="/#projects"
                      onClick={closeMenu}
                      className={headerStyles.listItemText}
                    >
                      <div
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
                      </div>
                    </AnchorLink>
                    <AnchorLink
                      to="/#contact"
                      className={headerStyles.listItemText}
                    >
                      <div
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
                      </div>
                    </AnchorLink>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
