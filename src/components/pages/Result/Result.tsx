import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "../../../store/index";
import { resetGame } from "../../../store/game/actions";

import Button from "../../common/Button";

import "./Result.scss";

const getResultMessage = (score: number, numberOfQuestions: number): string => {
  const percentage = score / numberOfQuestions;

  if (percentage >= 0.7) return "You're a Trivia master!";
  if (percentage < 0.4) return "Try again, Trivia newbie!";

  return "Nice score!";
};

const getHighScore = () => {
  return {
    highScore: localStorage.getItem("highScore") || 0,
    numberOfQuestions: localStorage.getItem("numberOfQuestions") || 0,
    date: localStorage.getItem("date") || '',
  };
};

const setHighScore = (score: number, numberOfQuestions: number) => {
  localStorage.setItem("highScore", score.toString());
  localStorage.setItem("numberOfQuestions", numberOfQuestions.toString());
  localStorage.setItem("date", new Date().toISOString());
};

const getIsHighScore = (score: number): boolean => {
  const { highScore } = getHighScore();
  return score > highScore;
};

const Result = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state.game.questions);
  const score = useSelector((state: RootState) => state.game.score);

  useEffect(() => {
    const isHighScore = getIsHighScore(score);

    if (isHighScore) {
      setHighScore(score, questions.length);
    }
  }, [score]);

  const onClickHandler = () => {
    dispatch(resetGame());
    navigate("/game");
  };

  const { highScore, numberOfQuestions, date } = getHighScore();

  return (
    <div className="result">
      <h2 className="result_title">
        {getResultMessage(score, questions.length)}
      </h2>
      <p>
        You got {score} out of {questions.length} questions right!
      </p>
      {highScore ? (
        <p>
          {`Your best score so far was ${highScore} out of ${numberOfQuestions} questions which you got on
        ${new Date(date).toLocaleDateString('en-US')}.`}
        </p>
      ) : (
        <p>No high score yet.</p>
      )}
      <Button label="Play again!" onClick={onClickHandler} />
    </div>
  );
};

export default Result;
