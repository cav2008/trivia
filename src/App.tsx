/** @jsxImportSource @emotion/react */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Game from './components/pages/Game';
import Result from './components/pages/Result';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
