import React from "react";
import { render as rtlRender, RenderResult } from "@testing-library/react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
// Import your own reducer
import game from "../store/game/reducer";

const reducer = combineReducers({
  game,
});

function render(
  ui: React.ReactElement,
  { store = createStore(reducer), ...renderOptions } = {}
): RenderResult {
  function Wrapper({ children }: { children: React.ReactElement }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
