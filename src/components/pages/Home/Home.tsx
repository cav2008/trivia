import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../common/Button";

const Home = (): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Trivia Game</h1>
      <Button label="Play game" onClick={() => navigate('/game')} />
    </div>
  );
};

export default Home;
