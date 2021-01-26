import { getAllTrainArrivals } from "../../../services/trains/trains";
import {
  setAllTrainArrivals,
  setError,
} from "../../Features/Global/globalSlice";
import { RootThunk } from "../../store";

export const getAllTrainArrivalsThunk = (): RootThunk => async (dispatch) => {
  try {
    // will fetch trains similar to buses and add to global state
    const trains = await getAllTrainArrivals();
    dispatch(setAllTrainArrivals(trains));
  } catch (error) {
    dispatch(setError(error));
  }
};
