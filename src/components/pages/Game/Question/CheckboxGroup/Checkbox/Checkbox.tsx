import React, { useRef } from "react";
import { CheckboxProps } from "./Checkbox.types";

import "./Checkbox.scss";

const Checkbox = ({
  id,
  value,
  isChecked,
  onChange,
}: CheckboxProps): React.ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onKeyPressHandler = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
  };

  return (
    <div>
      <label
        className="checkbox"
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
        <span className="checkbox_checkmark"></span>
      </label>
    </div>
  );
};

export default Checkbox;
