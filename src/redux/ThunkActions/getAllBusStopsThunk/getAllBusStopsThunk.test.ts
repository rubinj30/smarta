import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { DispatchExts, RootState } from "../../store";
import { getAllBusStopsThunk } from "./getAllBusStopsThunk";
import MockAdapter from "axios-mock-adapter";
import { ALL_BUSES_URL } from "../../../services/buses/buses";
import axios from "axios";
import { MOCK_BUS_STOPS } from "../../../testUtils/__mocks__/bus";

const mockStore = configureStore<RootState, DispatchExts>([thunk]);
const mockAdapter = new MockAdapter(axios);

describe("getAllBusStopsThunk", () => {
  it("should get all bus stops", async () => {
    mockAdapter.onGet(ALL_BUSES_URL).reply(200, MOCK_BUS_STOPS);
    const store = mockStore({
      global: { allBusStops: [], loading: false, error: undefined },
    });
    // @ts-ignore
    await store.dispatch(getAllBusStopsThunk());
    const actions = store.getActions();
    expect(actions).toEqual([
      { payload: true, type: "global/setLoading" },
      {
        payload: MOCK_BUS_STOPS,
        type: "global/setAllBusStops",
      },
      { payload: false, type: "global/setLoading" },
    ]);
  });
});
