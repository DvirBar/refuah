import React, { useState } from "react";
import Login from "./login/Login";
import styles from "./Auth.module.scss";
import Register from "./register/Register";

export default function Auth(): JSX.Element {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={styles.showcase}>
      {isLogin
        ? (
          <Login
            toggleLogin={toggleLogin}
          />
        )
        : <Register toggleLogin={toggleLogin} />}
    </div>

  );
}
