import React from "react"
import { useContext } from "react"
import * as modalStyles from "./modal.module.scss"
import { ThemeContext, themeHelper } from "./../../pages/index"

export function Modal({ open, onClose, children }) {
  const [theme] = useContext(ThemeContext)

  if (!open) return null

  return (
    <div
      onClick={onClose}
      className={`${modalStyles.overlay} ${themeHelper(
        theme,
        modalStyles.overlayDark,
        null
      )}`}
    >
      <div
        className={`${modalStyles.container} ${themeHelper(
          theme,
          modalStyles.containerDark,
          null
        )}`}
      >
        <div>
          <button
            className={`${modalStyles.button} ${themeHelper(
              theme,
              modalStyles.buttonDark,
              null
            )}`}
            onClick={onClose}
          >
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
