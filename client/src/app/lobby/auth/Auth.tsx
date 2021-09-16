import React, { useState } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import Login from "./login/Login";
import Register from "./register/Register";
import styles from "./Auth.module.scss";

export default function Auth(): JSX.Element {
  const [isLogin, setIsLogin] = useState(true);
  const duration = 200;
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const loginStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: "translateY(0)",
  };

  const registerStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: "translateY(0)",
  };

  const loginTransitionStyles: { [key in TransitionStatus]?: { transform: string } } = {
    entering: { transform: "translateY(-100vh)" },
    entered: { transform: "translateY(0)" },
    exiting: { transform: "translateY(-100vh)" },
    exited: { transform: "translateY(-100vh)" },
  };

  const registerTransitionStyles: { [key in TransitionStatus]?: { transform: string } } = {
    entering: { transform: "translateY(100vh)" },
    entered: { transform: "translateY(0)" },
    exiting: { transform: "translateY(100vh)" },
    exited: { transform: "translateY(100vh)" },
  };

  return (
    <div className={styles.showcase}>
      <Transition unmountOnExit in={isLogin} timeout={duration}>
        {state => (
          <div
            className={styles.showcaseItem}
            style={{ ...loginStyle, ...loginTransitionStyles[state] }}
          >
            <Login
              toggleLogin={toggleLogin}
            />
          </div>
        )}
      </Transition>
      <Transition unmountOnExit mountOnEnter in={!isLogin} timeout={duration}>
        {state => (
          <div
            className={styles.showcaseItem}
            style={{ ...registerStyle, ...registerTransitionStyles[state] }}
          >
            <Register
              toggleLogin={toggleLogin}
            />
          </div>
        )}
      </Transition>
    </div>

  );
}
