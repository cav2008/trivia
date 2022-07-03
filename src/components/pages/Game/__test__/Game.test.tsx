import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";

import questionsData from "../../../../../public/data/questions.json";
import { render, screen } from "../../../../util/test-util";
import Game from "../Game";

const withBrowserRouter = (component: React.ReactElement) => (
  <BrowserRouter>{component}</BrowserRouter>
);

const server = setupServer(
  rest.get("data/questions.json", (req, res, ctx) => {
    return res(ctx.json(questionsData));
  })
);

beforeEach(() => render(withBrowserRouter(<Game />)));
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Game", () => {
  it("should display amount of questions", async () => {
    // render(withBrowserRouter(<Game />));

    const questionAmount = await screen.findByText(/question 1 of 5/i);

    expect(questionAmount).toBeInTheDocument();
  });

  it("should display score 0", async () => {
    const score = await screen.findByText(/score: 0/i);

    expect(score).toBeInTheDocument();
  });

  it("should display correct message", async () => {
    const confirmButton = await screen.findByRole("button", {
      name: /confirm/i,
    });
    const radioButton = await screen.findByRole("radio", {
      name: /22 mangos/i,
    });

    userEvent.click(radioButton);
    userEvent.click(confirmButton);

    const score = await screen.findByText(/score: 1/i);
    const correctMessage = await screen.findByText(/You got it right!/i);

    expect(correctMessage).toBeInTheDocument();
    expect(score).toBeInTheDocument();
  });

  it("should display incorrect message", async () => {
    const confirmButton = await screen.findByRole("button", {
      name: /confirm/i,
    });

    userEvent.click(confirmButton);

    const score = await screen.findByText(/score: 0/i);
    const incorrectMessage = await screen.findByText(/That was incorrect!/i);

    expect(incorrectMessage).toBeInTheDocument();
    expect(score).toBeInTheDocument();
  });
});
