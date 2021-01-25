// @ts-nocheck
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React, { FC } from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { RootState } from "../redux/store";
import { MOCK_POLICY } from "./__mocks__/PasswordPolicy";
import renderWithTranslations from "./renderComponentTranslations";

export const defaultStore: Partial<RootState> = {
  global: { loading: false, error: undefined, passwordPolicy: MOCK_POLICY },
};

function renderWithRedux(
  ui: any,
  store: any = undefined,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  let reduxStore: any;
  const mockStore = configureStore([thunk]);
  reduxStore = mockStore({ ...defaultStore, ...store });

  const wrapper: FC<{}> = ({ children }) => (
    <Provider store={reduxStore}>
      <Router history={history}>{renderWithTranslations(children)}</Router>
    </Provider>
  );
  const renderSub = render(ui, { wrapper }) as any;
  return {
    ...renderSub,
    history,
  };
}

export default renderWithRedux;