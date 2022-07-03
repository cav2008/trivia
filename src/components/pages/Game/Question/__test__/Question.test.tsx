import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "../../../../../util/test-util";
import Question from "../Question";

const mockOptions = [
  {
    id: "a",
    value: "1 mango",
  },
  {
    id: "b",
    value: "2 mangos",
  },
  {
    id: "c",
    value: "10 mangos",
  },
  {
    id: "d",
    value: "22 mangos",
  },
];

describe("Question", () => {
  it("should render question", () => {
    render(
      <Question question="My test question" options={mockOptions} answers={["a", "b"]} />
    );

    const question = screen.getByText(/my test question/i);

    expect(question).toBeInTheDocument();
  });

  it("should render checkboxes when there are more than 1 answer", () => {
    render(
      <Question question="test" options={mockOptions} answers={["a", "b"]} />
    );

    screen.getAllByRole("checkbox");
  });

  it("should render radio buttons when there only 1 answer", () => {
    render(
      <Question question="test" options={mockOptions} answers={["a"]} />
    );

    screen.getAllByRole("radio");
  });
});
