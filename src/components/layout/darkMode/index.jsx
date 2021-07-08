import React from "react"
import { useContext, useEffect } from "react"
import { BsBrightnessHigh, BsMoon } from "react-icons/bs"
import { ThemeContext, themeHelper } from "./../../../pages/index"

export function DarkMode() {
  const [theme, setTheme] = useContext(ThemeContext)

  const icon = themeHelper(
    theme,
    <BsBrightnessHigh color="white" size="2rem" />,
    <BsMoon size="2rem" />
  )

  const DARKMODE_STORAGE_KEY = "alyssathi.darkMode"

  useEffect(() => {
    const darkModeJSON = localStorage.getItem(DARKMODE_STORAGE_KEY)
    if (darkModeJSON !== null) {
      setTheme(JSON.parse(darkModeJSON))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(DARKMODE_STORAGE_KEY, JSON.stringify(theme))
  }, [theme])

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
