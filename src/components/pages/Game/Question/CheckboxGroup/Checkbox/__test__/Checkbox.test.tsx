import React from "react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import Checkbox from "../Checkbox";

describe("Checkbox", () => {
  it("should render a checkbox", async () => {
    const mockFunc = jest.fn();

    render(
      <Checkbox
        id="test"
        value="testValue"
        isChecked={false}
        onChange={mockFunc}
      />
    );

    const checkboxButton: HTMLInputElement = screen.getByText("testValue");
    const checkboxInput = screen.getByRole("checkbox") as HTMLInputElement;

    await userEvent.click(checkboxButton);

    expect(mockFunc).toBeCalled();
    expect(checkboxInput).toHaveAttribute('id', 'test');
    expect(checkboxInput.checked).toEqual(false);
  });
});
