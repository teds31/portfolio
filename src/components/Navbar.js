import React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import DarkLogo from "../images/mylogo.png"
import LightLogo from "../images/mylogo-light.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEclipse } from "@fortawesome/pro-light-svg-icons"

const Navbar = () => {
  const [colorMode, setColorMode] = useColorMode("light")
  const newColorMode = colorMode === "light" ? "dark" : "light"
  return (
    <nav sx={{ display: "inline-block" }}>
      {" "}
      <Link to="/">
        {newColorMode === "dark" ? (
          <img src={DarkLogo} alt="dark logo teddy stanowski" />
        ) : (
          <img src={LightLogo} alt="light logo teddy stanowski" />
        )}
      </Link>
      <ul
        sx={{
          listStyle: "none",
          display: "flex",
          fontSize: 22,
        }}
      >
        <li sx={{ p: 3 }}>
          <Link
            to="/"
            sx={{ color: "primary", textDecoration: "none", outline: 0 }}
          >
            Home
          </Link>
        </li>
        <li sx={{ p: 3 }}>
          <Link
            to="/blog/"
            sx={{ color: "primary", textDecoration: "none", outline: 0 }}
          >
            Blog
          </Link>
        </li>
        {/* <li sx={{ p: 3 }}>
          <Link
            to="/page-2"
            sx={{
              color: "primary",
              textDecoration: "none",
              outline: 0,
            }}
          >
            Resume
          </Link>
        </li> */}
      </ul>
      <button
        type="button"
        sx={{
          color: "primary",
          p: 3,
          m: 3,
          cursor: "pointer",
          transitionDuration: 2,
          background: "transparent",
          border: theme => `2px solid ${theme.colors.primary}`,
          borderRadius: "5px",
          fontSize: 22,
          outline: 0,
        }}
      >
        Contact Me
      </button>
      <button
        onClick={e => {
          setColorMode(newColorMode)
        }}
        sx={{
          background: "transparent",
          border: "none",
          outline: 0,
          alignSelf: "center",
        }}
      >
        {newColorMode === "dark" ? (
          <FontAwesomeIcon
            icon={faEclipse}
            sx={{ fontSize: 48, color: "text", cursor: "pointer" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faEclipse}
            sx={{ fontSize: 48, color: "white", cursor: "pointer" }}
          />
        )}
      </button>
    </nav>
  )
}

export default Navbar
