// @ts-nocheck
import { BusStop } from "../interfaces";

export const organizeBusesByRoute = (busStops: BusStop[]) => {
  const routes = busStops.reduce((acc, stop) => {
    if (stop.ROUTE in acc) {
      acc[stop.ROUTE].push(stop);
    } else {
      acc[stop.ROUTE] = [stop];
    }
    return acc;
  }, {} as any);
  return routes;
};
