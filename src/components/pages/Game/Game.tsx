import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { setQuestions } from "../../../store/game/actions";
import Button from "../../common/Button";
import Question from "./Question";

const Game = (): React.ReactElement => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.game.questions);
  // const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("data/questions.json");

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        dispatch(setQuestions(data));
        // setQuestions(data);
      } catch (error) {
        console.log("Could not fetch data");
      }
    };

    fetchQuestions();
  }, []);

  if (!questions.length) return <h2>loading questions</h2>;

  const { question, options, answers } = questions[currentQuestionIndex];
  return (
    <div>
      <div>
        <h3>
          Question {currentQuestionIndex + 1} of {questions.length}
        </h3>
        <h3>Score: {score}</h3>
      </div>
      <div>
        <Question question={question} options={options} answers={answers} />
      </div>
      <div>
        <Button label="Confirm" onClick={() => null} />

        <div>
          {currentQuestionIndex < questions.length - 1 ? (
            <Button
              label="Next question"
              onClick={() =>
                setCurrentQuestionIndex(
                  (currentQuestionIndex) => currentQuestionIndex + 1
                )
              }
            />
          ) : (
            <Link to="/result">Results</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
