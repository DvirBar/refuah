import React, { useState } from "react";
import styled from "styled-components";
import Login from "./login/Login";
import Register from "./register/Register";

export default function Auth(): JSX.Element {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Wrapper>
      {isLogin
        ? (
          <Login
            toggleLogin={toggleLogin}
          />
        )
        : <Register toggleLogin={toggleLogin} />}
    </Wrapper>

  );
}

const Wrapper = styled.div`
  padding: 2rem;
  width: 37rem;
`;
