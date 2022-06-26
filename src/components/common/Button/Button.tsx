import React from "react";
import { ButtonProps } from "./Button.types";
import './Button.scss';

export const COLOR = {
  PRIMARY: 'button__primary',
  SECONDARY: 'button__secondary'
}

const Button = ({
  label,
  onClick,
  isDisabled = false,
  color = COLOR.PRIMARY
}: ButtonProps): React.ReactElement => {
  return (
    <button className={`button ${color}`} onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  );
};

export default Button;
