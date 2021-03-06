import React from "react";
import { QuestionProps } from "./Question.types";

import CheckboxGroup from "./CheckboxGroup";
import RadioGroup from "./RadioGroup";

import "./Question.scss";

const Question = ({
  question,
  options,
  answers,
}: QuestionProps): React.ReactElement => {
  return (
    <>
      <p className="question_title">{question}</p>
      <div className="question">
        {answers.length > 1 ? (
          <CheckboxGroup options={options} />
        ) : (
          <RadioGroup options={options} />
        )}
      </div>
    </>
  );
};

export default Question;
