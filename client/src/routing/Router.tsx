import ResetPassword from "app/lobby/auth/forgotPasword/ResetPassword/ResetPassword";
import Lobby from "app/lobby/Lobby";
import React from "react";
import { Switch, Route } from "react-router-dom";

export default function Router(): JSX.Element {
  return (
    <div className="router">
      <Switch>
        <Route exact path="/" component={Lobby} />
        <Route exact path="/resetPassword/:token" component={ResetPassword} />
      </Switch>
    </div>
  );
}
