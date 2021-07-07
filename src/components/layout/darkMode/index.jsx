import React from "react"
import { useContext } from "react"
import { BsBrightnessHigh, BsMoon } from "react-icons/bs"
import { ThemeContext, themeHelper } from "./../../../pages/index"

export function DarkMode() {
  const [theme, setTheme] = useContext(ThemeContext)

  const icon = themeHelper(
    theme,
    <BsBrightnessHigh color="white" size="2rem" />,
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
