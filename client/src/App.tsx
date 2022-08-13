import React from "react";
import { RecoilRoot } from "recoil";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "routing/Router";

function App(): JSX.Element {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
