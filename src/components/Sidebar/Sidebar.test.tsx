import React from "react";
import { screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import renderWithRedux from "../../testUtils/renderWithRedux";
import { SidebarBody } from "./SidebarBody/SidebarBody";
import { MOCK_BUS_STOPS } from "../../testUtils/__mocks__/bus";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

const mockStore = configureStore([thunk]);

describe("Sidebar", () => {
  let onCloseMock: any, onOpenMock: any;
  let store: any;
  beforeEach(() => {
    onCloseMock = jest.fn();
    onOpenMock = jest.fn();

    store = mockStore({
      global: {
        loading: false,
        error: undefined,
        allBusStops: [{ ...MOCK_BUS_STOPS[0] }, { ...MOCK_BUS_STOPS[1] }],
        allTrainArrivals: [],
      },
    });
  });

  it("renders", () => {
    renderWithRedux(
      <Sidebar
        onClose={onCloseMock}
        onOpen={onOpenMock}
        open={true}
        btnRef={jest.fn()}
      />,
      store
    );
  });
  it("renders open", () => {
    renderWithRedux(
      <Sidebar
        onClose={onCloseMock}
        onOpen={onOpenMock}
        open={true}
        btnRef={jest.fn()}
      />,
      store
    );
  });
  describe("SidebarBody", () => {
    renderWithRedux(<SidebarBody onClose={onCloseMock} />, store);
  });
});
