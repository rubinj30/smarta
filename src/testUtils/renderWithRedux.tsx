// @ts-nocheck
import { render } from "./test-utils";
import { createMemoryHistory } from "history";
import { FC } from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { RootState } from "../redux/store";

export const defaultStore: Partial<RootState> = {
  global: { loading: false, error: undefined, allBusStops: [] },
};

function renderWithRedux(
  ui: any,
  store: any = undefined,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  const wrapper: FC<{}> = ({ children }) => {
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    );
  };
  const renderSub = render(ui, { wrapper }) as any;
  return {
    ...renderSub,
    history,
  };
}

export default renderWithRedux;
