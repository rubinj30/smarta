import { getAllBusStops } from "../../../services/buses/buses";
import { setAllBusStops, setLoading } from "../../Features/Global/globalSlice";
import { RootThunk } from "../../store";

export const getAllBusStopsThunk = (): RootThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const buses = await getAllBusStops();
    dispatch(setAllBusStops(buses));
  } catch {
    // render toast error
  } finally {
    dispatch(setLoading(false));
  }
};
