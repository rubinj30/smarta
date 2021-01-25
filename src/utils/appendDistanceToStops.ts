import { BusStop, Position } from "../interfaces";
import { store } from "../redux/store";
import { computeDistanceBetween, LatLng } from "spherical-geometry-js";
import { defaultCoords } from "./defaultCoords";
import { convertMetersToMiles } from "./convertMetersToMiles";

export const appendDistanceToStops = (stops: BusStop[], position: Position) => {
  const { latitude, longitude } = position;
  const stopsWithDistances = stops.map((stop) => {
    const meters = computeDistanceBetween(
      {
        lat: latitude || defaultCoords.lat,
        lng: longitude || defaultCoords.lng,
      },
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
  return stopsWithDistances;
};
