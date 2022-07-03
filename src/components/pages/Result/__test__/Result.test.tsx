import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import store from "../../../../store";
import {
  incrementScore,
  resetGame,
  setQuestions,
} from "../../../../store/game/actions";
import questionsData from "../../../../../public/data/questions.json";
import { render, screen } from "../../../../util/test-util";

import Result from "../Result";

const withBrowserRouter = (component: React.ReactElement) => (
  <BrowserRouter>{component}</BrowserRouter>
);

beforeEach(() => store.dispatch(setQuestions(questionsData)));
afterEach(() => store.dispatch(resetGame()));

describe("Result", () => {
  it("should display number of correct answers message", async () => {
    store.dispatch(incrementScore());

    render(withBrowserRouter(<Result />), { store });

    expect(
      await screen.findByText(/you got 1 out of 5 questions right!/i)
    ).toBeVisible();
  });

  it("should display best message", async () => {
    for (let i = 0; i < 5; i++) {
      store.dispatch(incrementScore());
    }

    render(withBrowserRouter(<Result />), { store });

    expect(await screen.findByText(/you're a trivia master!/i)).toBeVisible();
  });

  it("should display average message", async () => {
    for (let i = 0; i < 3; i++) {
      store.dispatch(incrementScore());
    }

    render(withBrowserRouter(<Result />), { store });

    expect(await screen.findByText(/Nice score!/i)).toBeVisible();
  });

  it("should display bad message", async () => {
    for (let i = 0; i < 1; i++) {
      store.dispatch(incrementScore());
    }

    render(withBrowserRouter(<Result />), { store });

    expect(await screen.findByText(/Try again, Trivia newbie!/i)).toBeVisible();
  });
});
