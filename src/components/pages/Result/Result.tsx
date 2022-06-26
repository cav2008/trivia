import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFetch from "../../../hooks/api/useFetch";
import { RootState } from "../../../store/index";
import { resetGame } from "../../../store/game/actions";

import Button from "../../common/Button";

import "./Result.scss";

const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max) + 1
}

const getResultMessage = (
  score: number,
  numberOfQuestions: number
): { message: string; rank: string } => {
  const percentage = score / numberOfQuestions;

  if (percentage >= 0.7)
    return { message: "You're a Trivia master!", rank: "master" };
  if (percentage < 0.4)
    return { message: "Try again, Trivia newbie!", rank: "loser" };

  return { message: "Nice score!", rank: "good-job" };
};

const getHighScore = () => {
  return {
    highScore: localStorage.getItem("highScore") || 0,
    numberOfQuestions: localStorage.getItem("numberOfQuestions") || 0,
    date: localStorage.getItem("date") || "",
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
  const { message, rank } = getResultMessage(score, questions.length);
  const [isLoading, apiData] = useFetch(
    `https://api.giphy.com/v1/gifs/search?api_key=b6knmEeweEtd9H7LlAUA1F8I0F9Y4zn0&q=${rank}&limit=25&offset=0&rating=r&lang=en`
  );

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

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div className="result">
      <img
        className="result_image"
        src={apiData.data[getRandomNumber(10)].images.downsized_medium.url}
        alt={`${rank} gif`}
      />
      <h2 className="result_title">{message}</h2>
      <p>
        You got {score} out of {questions.length} questions right!
      </p>
      {highScore ? (
        <p>
          {`Your best score so far was ${highScore} out of ${numberOfQuestions} questions which you got on
        ${new Date(date).toLocaleDateString("en-US")}.`}
        </p>
      ) : (
        <p>No high score yet.</p>
      )}
      <Button label="Play again!" onClick={onClickHandler} />
    </div>
  );
};

export default Result;
