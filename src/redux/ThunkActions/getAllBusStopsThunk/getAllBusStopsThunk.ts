import { computeDistanceBetween } from "spherical-geometry-js";
import { mockBusRoutes } from "../../../testUtils/__mocks__/bus";
import { convertMetersToMiles } from "../../../utils/convertMetersToMiles";
import { setAllBusStops, setLoading } from "../../Features/Global/globalSlice";
import { RootThunk } from "../../store";

export const getAllBusStopsThunk = (position: any): RootThunk => async (
  dispatch
) => {
  dispatch(setLoading(true));
  const { latitude, longitude } = position;
  try {
    // TODO: uncomment and figure out how to avoid rate limiting. Cache on server or redux-persist.
    // const buses = await getAllBusStops();
    const updatedBusStops = mockBusRoutes.map((stop) => {
      const meters = computeDistanceBetween(
        { lat: parseFloat(latitude!), lng: parseFloat(longitude!) },
        {
          lat: parseFloat(stop.LATITUDE),
          lng: parseFloat(stop.LONGITUDE),
        }
      );
      const miles = convertMetersToMiles(meters);
      return {
        ...stop,
        distance: miles,
      };
    });
    console.log(updatedBusStops);
    dispatch(setAllBusStops(updatedBusStops));
    // dispatch(setAllBusStops(buses))
  } catch (error) {
    // render toast error
    console.log("ERROR", error);
  } finally {
    dispatch(setLoading(false));
  }
};
