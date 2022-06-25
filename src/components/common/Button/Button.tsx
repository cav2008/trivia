import React from "react";
import { ButtonProps } from "./Button.types";

const Button = ({ label, onClick }: ButtonProps): React.ReactElement => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
