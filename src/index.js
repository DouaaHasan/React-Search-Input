import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// context
import { AppContextProvider } from "./context/AppContext";
// style
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/global";
import Theme from "./style/theme";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
