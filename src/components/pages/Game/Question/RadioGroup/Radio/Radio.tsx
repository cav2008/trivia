import React, { useRef } from "react";
import { RadioProps } from "./Radio.types";

import "./Radio.scss";

const Radio = ({
  id,
  value,
  isChecked,
  onChange,
}: RadioProps): React.ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onKeyPressHandler = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
  };

  return (
    <div>
      <label
        className="radio"
        htmlFor={id}
        tabIndex={0}
        onKeyPress={onKeyPressHandler}
      >
        {value}
        <input
          ref={inputRef}
          type="radio"
          id={id}
          name={value}
          value={id}
          checked={isChecked}
          onChange={onChange}
          tabIndex={-1}
        />
        <span className="radio_checkmark"></span>
      </label>
    </div>
  );
};

export default Radio;
