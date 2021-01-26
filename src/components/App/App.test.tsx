import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../testUtils/test-utils";
import { App } from "./App";
import { act } from "react-dom/test-utils";
import renderWithRedux from "../../testUtils/renderWithRedux";
import { MOCK_BUS_STOPS } from "../../testUtils/__mocks__/bus";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { useDispatch } from "react-redux";

const mockStore = configureStore([thunk]);

const mockOnClose = jest.fn();
const mockOnOpen = jest.fn();

jest.mock("@chakra-ui/react", () => ({
  ...(jest.requireActual("@chakra-ui/react") as Object),
  useDisclosure: () => ({
    onClose: mockOnClose,
    isOpen: true,
    onOpen: mockOnOpen,
  }),
}));

describe.skip("App", () => {
  let store: any;
  beforeEach(() => {
    store = mockStore({
      global: {
        loading: false,
        error: undefined,
        allBusStops: [{ ...MOCK_BUS_STOPS[0] }, { ...MOCK_BUS_STOPS[1] }],
      },
    });
  });
  it("renders", () => {
    renderWithRedux(<App />);
  });
  it("clicking hamburger icon calls onOpen", () => {
    render(<App />);
    act(() => {
      fireEvent.click(screen.getByTestId("hamburger-icon"));
    });
    expect(mockOnOpen).toHaveBeenCalled();
  });
});
