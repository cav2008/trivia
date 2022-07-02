import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../../../store/index";
import { setUserAnswers } from "../../../../../store/game/actions";

import { CheckboxGroupProps } from "./CheckboxGroup.types";
import Checkbox from "./Checkbox";

const CheckboxGroup = ({ options }: CheckboxGroupProps) => {
  const dispatch = useDispatch();
  const userAnswers = useSelector((state: RootState) => state.game.userAnswers);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (userAnswers.includes(value)) {
      const removedAnswers = userAnswers.filter(
        (answer: string) => answer !== value
      );
      dispatch(setUserAnswers(removedAnswers));
    } else {
      dispatch(setUserAnswers([...userAnswers, value]));
    }
  };

  return (
    <>
      {options.length
        ? options.map(({ id, value }) => (
            <Checkbox
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

export default CheckboxGroup;
