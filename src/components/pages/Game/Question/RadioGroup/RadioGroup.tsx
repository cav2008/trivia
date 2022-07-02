import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../../../store/index";
import { setUserAnswers } from "../../../../../store/game/actions";

import { RadioGroupProps } from "./RadioGroup.types";
import Radio from "./Radio";

const RadioGroup = ({ options }: RadioGroupProps) => {
  const dispatch = useDispatch();
  const userAnswers = useSelector((state: RootState) => state.game.userAnswers);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setUserAnswers([value]));
  };

  return (
    <>
      {options.length
        ? options.map(({ id, value }) => (
            <Radio
              key={id}
              id={id}
              value={value}
              isChecked={userAnswers.includes(id)}
              onChange={onChangeHandler}
            />
          ))
        : null}
    </>
  );
};

export default RadioGroup;
