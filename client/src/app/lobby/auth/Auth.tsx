import React, { useState } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import Login from "./login/Login";
import Register from "./register/Register";
import styles from "./Auth.module.scss";

export default function Auth(): JSX.Element {
  const [isLogin, setIsLogin] = useState(true);
  const duration = 200;
  const opacityDur = 200;
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const loginStyle = {
    transition: `transform ${duration}ms ease-in-out, opacity ${opacityDur}ms ease-in-out`,
    transform: "translateX(0)",
    opacity: 1,
  };

  const registerStyle = {
    transition: `transform ${duration}ms ease-in-out, opacity ${opacityDur}ms ease-in-out`,
    transform: "translateX(0)",
    opacity: 1,
  };

  const loginTransitionStyles: {
    [key in TransitionStatus]?: { transform: string, opacity: number }
  } = {
    entering: { transform: "translateX(-100vw)", opacity: 1 },
    entered: { transform: "translateX(0)", opacity: 1 },
    exiting: { transform: "translateX(-100vw)", opacity: 0 },
    exited: { transform: "translateX(-100vw)", opacity: 0 },
  };

  const registerTransitionStyles: {
    [key in TransitionStatus]?: { transform: string, opacity: number }
  } = {
    entering: { transform: "translateX(100vw)", opacity: 1 },
    entered: { transform: "translateX(0)", opacity: 1 },
    exiting: { transform: "translateX(100vw)", opacity: 0 },
    exited: { transform: "translateX(100vw)", opacity: 0 },
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
