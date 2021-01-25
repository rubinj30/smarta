import { setError, setLoading } from "../../Features/Global/globalSlice";
import { RootThunk } from "../../store";

export const getAllTrainStopsThunk = (position: any): RootThunk => async (
  dispatch
) => {
  dispatch(setLoading(true));
  try {
    // will fetch trains similar to buses and add to global state
  } catch (error) {
    console.log("ERROR", error);
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};
