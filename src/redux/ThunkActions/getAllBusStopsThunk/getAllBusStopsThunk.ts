import { getAllBusStops } from "../../../services/buses/buses";
import { mockBusRoutes } from "../../../testUtils/__mocks__/bus";
import { setAllBusStops, setLoading } from "../../Features/Global/globalSlice";
import { RootThunk } from "../../store";

export const getAllBusStopsThunk = (): RootThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    // TODO: uncomment and figure out how to avoid rate limiting. Cache on server or redux-persist.
    // const buses = await getAllBusStops();
    dispatch(setAllBusStops(mockBusRoutes));
    // dispatch(setAllBusStops(buses))
  } catch {
    // render toast error
  } finally {
    dispatch(setLoading(false));
  }
};
