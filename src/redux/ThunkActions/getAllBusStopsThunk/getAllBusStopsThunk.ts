import { getAllBusStops } from "../../../services/buses/buses";

import {
  setAllBusStops,
  setError,
  setLoading,
} from "../../Features/Global/globalSlice";
import { RootThunk } from "../../store";

export const getAllBusStopsThunk = (): RootThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const busStops = await getAllBusStops();
    dispatch(setAllBusStops(busStops));
  } catch (error) {
    console.log("Error", error);
    setError(error.message);
  } finally {
    dispatch(setLoading(false));
  }
};
