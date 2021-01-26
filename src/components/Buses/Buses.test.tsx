import React from "react";
import { screen } from "@testing-library/react";
import { Buses } from "./Buses";
import renderWithRedux from "../../testUtils/renderWithRedux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MOCK_BUS_STOPS } from "../../testUtils/__mocks__/bus";
import { appendDistanceToStops } from "../../utils/appendDistanceToStops";
import { genWindowSize } from "../../utils/genWindowSize";
import { useWindowWidth } from "../../hooks/useWindowWidth";

const mockStore = configureStore([thunk]);

jest.mock("../../utils/appendDistanceToStops", () => ({
  appendDistanceToStops: jest.fn(),
}));
jest.mock("../../utils/genWindowSize", () => ({
  genWindowSize: jest.fn(),
}));
jest.mock("../../hooks/useWindowWidth", () => ({
  useWindowWidth: jest.fn(() => 50),
}));

describe("Buses", () => {
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
    renderWithRedux(
      <Buses position={{ latitude: 10, longitude: 10 }} />,
      store
    );
    screen.findByText(/All Bus Stops/);
    // @ts-ignore
    screen.debug(null, 20000);
  });

  it("should call appendDistanceToStops with bus data from store and position", () => {
    renderWithRedux(
      <Buses position={{ latitude: 10, longitude: 10 }} />,
      store
    );
    const mockBusStops = [{ ...MOCK_BUS_STOPS[0] }, { ...MOCK_BUS_STOPS[1] }];
    expect(appendDistanceToStops).toHaveBeenCalledWith(mockBusStops, {
      latitude: 10,
      longitude: 10,
    });
  });
  it("should call useWindowWidth", () => {
    renderWithRedux(
      <Buses position={{ latitude: 10, longitude: 10 }} />,
      store
    );
    expect(useWindowWidth).toHaveBeenCalled();
  });
  it("should call genWindowSize width", () => {
    renderWithRedux(
      <Buses position={{ latitude: 10, longitude: 10 }} />,
      store
    );
    expect(genWindowSize).toHaveBeenCalledWith(50);
  });
});
