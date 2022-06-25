import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuestionProps } from "./Question.types";

import { RootState } from "../../../../store/index";
import { setUserAnswers } from "../../../../store/game/actions";

import Option from "./Option";

const Question = ({
  question,
  options,
}: QuestionProps): React.ReactElement => {
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
    <div>
      <p>{question}</p>
      {options.length
        ? options.map(({ id, value }) => (
            <Option
              key={id}
              id={id}
              value={value}
              isChecked={userAnswers.includes(id)}
              onChange={onChangeHandler}
            />
          ))
        : null}
    </div>
  );
};

export default Question;
