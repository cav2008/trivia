import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../common/Button";
import './Home.scss';

const Home = (): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1 className="home_title">Trivia Game</h1>
      <p>Welcome to the most amazing Trivia game in the world!!!</p>
      <p>Play now</p>
      <p className="home_pointer">👇</p>
      <Button label="Play game" onClick={() => navigate('/game')} />
    </div>
  );
};

export default Home;
