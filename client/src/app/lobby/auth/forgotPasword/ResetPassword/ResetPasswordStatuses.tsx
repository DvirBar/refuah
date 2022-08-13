import React from "react";
import { StatusType } from "store/types";
import emailSent from "assets/passwordReset.svg";

interface ResetPasswordStatusesProps {
    status: StatusType
}
export default function ResetPasswordStatuses({ status }: ResetPasswordStatusesProps): JSX.Element {
  if (status === StatusType.Success) {
    return <img src={emailSent} alt="logo" />;
  }

  return (
    <div />
  );
}
