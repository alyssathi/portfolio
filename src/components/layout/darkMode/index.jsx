import React from "react"
import { useState } from "react"
import { BsBrightnessHigh, BsMoon } from "react-icons/bs"

export function DarkMode() {
  const [theme, setTheme] = useState("light")

  const icon =
    theme === "dark" ? (
      <BsBrightnessHigh size="2rem" color="white" />
    ) : (
      <BsMoon size="2rem" />
    )

  return (
    <>
      <div
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        {icon}
      </div>
    </>
  )
}
