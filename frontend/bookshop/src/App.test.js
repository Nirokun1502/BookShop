import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./State/store";
import { act } from "react";

test("renders components correctly", async () => {
  await act(async () => {
    <Provider store={store}>
      <App />
    </Provider>;
  });
});
