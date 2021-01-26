import React from "react";
import { screen } from "@testing-library/react";
import Map from "./Map";
import renderWithRedux from "../../testUtils/renderWithRedux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MOCK_BUS_STOPS } from "../../testUtils/__mocks__/bus";
import { MOCK_POSITION } from "../../testUtils/__mocks__/position";

const mockStore = configureStore([thunk]);

describe("Map", () => {
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
    renderWithRedux(<Map position={MOCK_POSITION} />, store);
    //@ts-ignore
    screen.debug(null, 2000);
  });

  it("should call appendDistanceToStops with bus data from store and position", () => {
    renderWithRedux(<Map position={MOCK_POSITION} />, store);
  });
});
