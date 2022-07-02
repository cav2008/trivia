import React from "react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import Radio from "../Radio";

describe("Radio", () => {
  it("should render a radio button", async () => {
    const mockFunc = jest.fn();

    render(
      <Radio
        id="test"
        value="testValue"
        isChecked={false}
        onChange={mockFunc}
      />
    );

    const radioButton: HTMLInputElement = screen.getByText("testValue");
    const radioInput = screen.getByRole("radio") as HTMLInputElement;

    await userEvent.click(radioButton);

    expect(mockFunc).toBeCalled();
    expect(radioInput).toHaveAttribute('id', 'test');
    expect(radioInput).not.toBeChecked();
  });
});
