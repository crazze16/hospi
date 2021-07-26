import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18n";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Suspense>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);