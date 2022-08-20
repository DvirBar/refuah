import LogoMain from "app/lobby/LogoMain/LogoMain";
import Typography from "components/typography/Typography";
import { Status } from "forms/useForm";
import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { resetPasswordAtom } from "store/auth/atoms";
import styled from "styled-components";
import ResetPasswordForm from "./ResetPasswordForm";
// import ResetPasswordStatuses from "./ResetPasswordStatuses";

export default function ResetPassword(): JSX.Element {
  const status = useRecoilValueLoadable(resetPasswordAtom);
  return (
    <div>
      <LogoMain backgroundColor="#ffffff" />
      <Wrapper>
        <Typography variant="h1">איפוס סיסמה</Typography>
        {!status.state || status.state === Status.Loading
          ? <></>
          : <ResetPasswordForm />}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
