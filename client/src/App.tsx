import React from "react";
import Lobby from "app/lobby/Lobby";
import { RecoilRoot } from "recoil";
import "./styles/App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <RecoilRoot>
        <Lobby />
      </RecoilRoot>
    </div>
  );
}

export default App;
