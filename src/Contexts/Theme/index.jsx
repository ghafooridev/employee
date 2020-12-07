import React, { useState } from "react"
import PropType from "prop-types"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Theme from "./Theme"
import ThemeContext from "./ThemeContext"

const ThemeContextProvider = (props) => {
  const { children } = props
  const [theme, setTheme] = useState({
    Theme,
  })


  const muiTheme = createMuiTheme(theme.Theme)
  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeContext.Provider value={{ theme }}>
        <CssBaseline />
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  )
}

ThemeContextProvider.propTypes = {
  children: PropType.node.isRequired,
}
export default ThemeContextProvider
