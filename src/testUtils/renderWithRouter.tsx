// @ts-nocheck
import { render } from "./test-utils";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { PortalManager } from "@chakra-ui/portal";

export const renderWithPortal = (ui: React.ReactElement) =>
  render(<PortalManager>{ui}</PortalManager>);

const renderWithRouter = (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  return {
    ...renderWithPortal(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
};
export default renderWithRouter;
