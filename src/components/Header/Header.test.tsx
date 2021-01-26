import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../testUtils/test-utils";
import { Header } from "./Header";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureStore([thunk]);

const mockOnOpen = jest.fn();

describe("Header", () => {
  let store: any;
  beforeEach(() => {
    store = mockStore({
      global: {
        loading: false,
        error: undefined,
        allBusStops: [],
      },
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("renders", () => {
    render(<Header onOpen={mockOnOpen} btnRef={jest.fn()} />);
  });
  it("contains the title", () => {
    render(<Header onOpen={mockOnOpen} btnRef={jest.fn()} />);
    expect(screen.getByText("SMARTA")).toBeTruthy();
    expect(screen.getByText("Bus")).toBeTruthy();
  });
  it("should call onOpen prop when hamburgerIcon is clicked", () => {
    render(<Header onOpen={mockOnOpen} btnRef={jest.fn()} />);
    fireEvent.click(screen.getByTestId("hamburger-icon"));
    expect(mockOnOpen).toHaveBeenCalled();
  });
});
