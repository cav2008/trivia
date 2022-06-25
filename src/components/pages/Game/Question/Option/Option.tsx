import React from "react";
import { OptionProps } from "./Option.types";

const Option = ({ id, value, isChecked, onChange }: OptionProps): React.ReactElement => {
  return (
    <div>
      <label htmlFor={value}>{value}</label>
      <input
        type="checkbox"
        id={id}
        name={value}
        value={id}
        checked={isChecked}
        onChange={onChange}
      />
    </div>
  );
};

export default Option;
