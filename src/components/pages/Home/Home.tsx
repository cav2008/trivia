import React from "react";
import { Link } from "react-router-dom";

const Home = (): React.ReactElement => {
  return (
    <div>
      <h1>Trivia Game</h1>
      <Link to="/game">Play</Link>
    </div>
  );
};

export default Home;
