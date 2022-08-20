import React from "react";
import { RecoilRoot } from "recoil";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "routing/Router";
import { ThemeProvider } from "styled-components";
import theme from "styles/vars";

function App(): JSX.Element {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
