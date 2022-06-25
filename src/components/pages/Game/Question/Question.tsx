import React, { useState } from "react";
import { QuestionProps } from "./Question.types";
import Option from "./Option";

const Question = ({
  question,
  options,
  answers,
}: QuestionProps): React.ReactElement => {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (userAnswers.includes(value)) {
      setUserAnswers((userAnswers) =>
        userAnswers.filter((answer) => answer !== value)
      );
    } else {
      setUserAnswers((userAnswers) => [...userAnswers, value]);
    }
  };

  console.log(userAnswers);

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
