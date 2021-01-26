import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { DispatchExts, RootState } from "../../store";
import { getAllTrainArrivalsThunk } from "./getAllTrainArrivalsThunk";
import MockAdapter from "axios-mock-adapter";
import { TRAIN_URL } from "../../../services/trains/trains";
import axios from "axios";
import { MOCK_TRAIN_ARRIVALS } from "../../../testUtils/__mocks__/train";

const mockStore = configureStore<RootState, DispatchExts>([thunk]);
const mockAdapter = new MockAdapter(axios);

describe("getAllTrainArrivalsThunk", () => {
  it("should get all train arrivals", async () => {
    mockAdapter.onGet(TRAIN_URL).reply(200, MOCK_TRAIN_ARRIVALS);
    const store = mockStore({
      global: {
        allBusStops: [],
        allTrainArrivals: [],
        loading: false,
        error: undefined,
      },
    });
    // @ts-ignore
    await store.dispatch(getAllTrainArrivalsThunk());
    const actions = store.getActions();
    expect(actions).toEqual([
      {
        payload: MOCK_TRAIN_ARRIVALS,
        type: "global/setAllTrainArrivals",
      },
    ]);
  });
});
