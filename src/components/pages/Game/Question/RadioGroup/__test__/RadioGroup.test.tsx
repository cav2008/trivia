import React from "react";
import { render, screen } from '../../../../../../util/test-util';

import RadioGroup from "../RadioGroup";

describe("RadioGroup", () => {
  it("should render 4 radio buttons", async () => {
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

    render(<RadioGroup options={mockOptions} />);

    const radioButtons = screen.getAllByRole("radio");

    expect(radioButtons).toHaveLength(4);
  });
});
