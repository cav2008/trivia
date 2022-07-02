import React from "react";
import { render, screen } from '../../../../../../util/test-util';

import CheckboxGroup from "../CheckboxGroup";

describe("CheckboxGroup", () => {
  it("should render 4 checkboxes", async () => {
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

    render(<CheckboxGroup options={mockOptions} />);

    const checkboxes = screen.getAllByRole("checkbox");

    expect(checkboxes).toHaveLength(4);
  });
});
