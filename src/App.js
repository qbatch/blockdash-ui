import React, { useState, useEffect } from "react";
import "../src/static/css/style.css";
import { ThemeProvider } from "styled-components";
import Button from "./components/button/button.styled";
import config from "./config/config";
import { BrowserRouter } from "react-router-dom";
import AuthRoute from "../src/routes/AuthRoute";
import AppRoute from "../src/routes/AppRoute";
import GlobalStyles from "./config/theme/global.styled";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { darkTheme, lightTheme } from "../src/config/theme/themeVariables"

function App() {
  const [selectedTheme, setSelectedTheme] = useState(lightTheme);
  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
    console.log("theme")
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };
  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);
  return (
    < BrowserRouter basename = "/blockdash-ui" >
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        <div className="themeButtons">
          <Button onClick={() => HandleThemeChange(lightTheme)} >Light</Button>
          <Button outlined="1" onClick={() => HandleThemeChange(darkTheme)} >Dark</Button>
        </div>
        <AuthRoute path="/auth" />
        <AppRoute path="/" />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
