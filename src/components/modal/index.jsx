import React from "react"
import * as modalStyles from "./modal.module.scss"
export function Modal({ open, onClose, children }) {
  if (!open) return null
  return (
    <div onClick={onClose} className={modalStyles.overlay}>
      <div className={modalStyles.container}>
        <div>
          <button className={modalStyles.button} onClick={onClose}>
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
