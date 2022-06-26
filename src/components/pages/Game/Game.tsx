import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "../../../store/index";
import {
  setQuestions,
  setCurrentQuestionIndex,
  incrementScore,
  resetUserAnswer,
} from "../../../store/game/actions";

import Button, { COLOR } from "../../common/Button";
import Question from "./Question";
import Card from "../../common/Card";

import "./Game.scss";

const getIsAnswersCorrect = (
  userAnswers: string[],
  answers: string[]
): boolean => {
  if (userAnswers.length !== answers.length) return false;

  const allCorrect = userAnswers.every((item: string) => {
    return answers.includes(item);
  });

  if (!allCorrect) return false;

  return true;
};

const Game = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { questions, score, userAnswers, currentQuestionIndex } = useSelector(
    (state: RootState) => state.game
  );
  const [isAnswered, setIsAnswered] = useState(false);

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
  const isAnswerCorrect = getIsAnswersCorrect(userAnswers, answers);

  const onClickHandler = () => {
    setIsAnswered(true);

    if (isAnswerCorrect) {
      dispatch(incrementScore());
    }

    setTimeout(() => {
      dispatch(resetUserAnswer());
      const isLastQuestion = currentQuestionIndex >= questions.length - 1;
      isLastQuestion
        ? navigate("/result")
        : dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
      setIsAnswered(false);
    }, 1000);
  };

  return (
    <div className="game">
      <Card>
        <>
          <div className="game_header">
            <h2>
              Question {currentQuestionIndex + 1} of {questions.length}
            </h2>
            <h2 className="game_headerScore">Score: {score}</h2>
          </div>
          <Question question={question} options={options} />
          <div className="game_message">
            {isAnswered && (
              <p
                className={
                  isAnswerCorrect
                    ? "game_message__correct"
                    : "game_message__incorrect"
                }
              >
                {isAnswerCorrect ? "You got it right!" : "That was incorrect!"}
              </p>
            )}
          </div>
          <div>
            <Button
              label="Confirm"
              onClick={onClickHandler}
              isDisabled={isAnswered}
              color={COLOR.SECONDARY}
            />
          </div>
        </>
      </Card>
    </div>
  );
};

export default Game;
