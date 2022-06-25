import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "../../../store/index";
import { resetGame } from "../../../store/game/actions";

import Button from "../../common/Button";

const Result = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state.game.questions);
  const score = useSelector((state: RootState) => state.game.score);

  const onClickHandler = () => {
    dispatch(resetGame());
    navigate("/game");
  };

  return (
    <div>
      <h2>You're a Trivia master!</h2>
      <p>
        You got {score} out of {questions.length} questions right!
      </p>
      <p>
        Your best score so far was 4 out of 5 questions which you got on
        2/22/22.
      </p>
      <Button label="Play again!" onClick={onClickHandler} />
    </div>
  );
};

export default Result;
