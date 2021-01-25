import axios from "axios";
import { computeDistanceBetween, LatLng } from "spherical-geometry-js";
import { usePosition } from "use-position";
import { BusStop } from "../../../interfaces";
import { BUS_URL_BASE, getAllBusStops } from "../../../services/buses/buses";
import { convertMetersToMiles } from "../../../utils/convertMetersToMiles";
import { defaultCoords } from "../../../utils/defaultCoords";
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
    console.log("Error --- ", error);
    setError(error.message);
  } finally {
    console.log("Hello");
    dispatch(setLoading(false));
  }
};
