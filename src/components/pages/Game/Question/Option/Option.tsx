import React, { useRef } from "react";
import { OptionProps } from "./Option.types";

import "./Option.scss";

const Option = ({
  id,
  value,
  isChecked,
  onChange,
}: OptionProps): React.ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onKeyPressHandler = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
  };

  return (
    <div>
      <label
        className="option"
        htmlFor={id}
        tabIndex={0}
        onKeyPress={onKeyPressHandler}
      >
        {value}
        <input
          ref={inputRef}
          type="checkbox"
          id={id}
          name={value}
          value={id}
          checked={isChecked}
          onChange={onChange}
          tabIndex={-1}
        />
        <span className="option_checkmark"></span>
      </label>
    </div>
  );
};

export default Option;
