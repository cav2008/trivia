import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "../../../store/index";
import {
  setQuestions,
  setCurrentQuestionIndex,
  incrementScore,
  resetUserAnswer,
} from "../../../store/game/actions";

import Button from "../../common/Button";
import Question from "./Question";

const isAnswersCorrect = (userAnswers: string[], answers: string[]): boolean => {
  if (userAnswers.length !== answers.length) return false

  const allCorrect = userAnswers.every((item: string) => {
    return answers.includes(item);
  });

  if (!allCorrect) return false;

  return true
};

const Game = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { questions, score, userAnswers, currentQuestionIndex } = useSelector(
    (state: RootState) => state.game
  );

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("data/questions.json");

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        dispatch(setQuestions(data));
      } catch (error) {
        console.log("Could not fetch data");
      }
    };

    fetchQuestions();
  }, []);

  if (!questions.length) return <h2>loading questions</h2>;

  const { question, options, answers } = questions[currentQuestionIndex];

  const onClickHandler = () => {
    const { answers } = questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex >= questions.length - 1;

    if (isAnswersCorrect(userAnswers, answers)) {
      dispatch(incrementScore());
    }

    dispatch(resetUserAnswer());

    isLastQuestion
      ? navigate("/result")
      : dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
  };

  return (
    <div>
      <div>
        <h3>
          Question {currentQuestionIndex + 1} of {questions.length}
        </h3>
        <h3>Score: {score}</h3>
      </div>
      <div>
        <Question question={question} options={options} />
      </div>
      <div>
        <Button label="Confirm" onClick={onClickHandler} />
      </div>
    </div>
  );
};

export default Game;
