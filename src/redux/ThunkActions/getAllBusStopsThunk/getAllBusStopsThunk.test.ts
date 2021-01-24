import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { DispatchExts, RootState } from "../../store";
import { getAllBusStopsThunk } from "./getAllBusStopsThunk";

const mockStore = configureStore<RootState, DispatchExts>([thunk]);

describe("getAllBusStopsThunk", () => {
  it("should get all bus stops", async () => {
    const store = mockStore({
      global: { allBusStops: [], loading: false, error: undefined },
    });
    await store.dispatch(getAllBusStopsThunk());
  });
});
