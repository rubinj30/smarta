export interface BusStop {
  /** level of adherence for staying on time */
  ADHERENCE: string;
  BLOCKID: string;
  BLOCK_ABBR: string;
  DIRECTION: string;
  LATITUDE: string;
  LONGITUDE: string;
  /** after some more detailed research
   * and realizing that this is in the PAST (D'oh),
   * it seems like this might be the last time a stop was reached */
  MSGTIME: string;
  ROUTE: string;
  STOPID: string;
  TIMEPOINT: string;
  TRIPID: string;
  VEHICLE: string;
}

export interface BusStopWithDistance extends BusStop {
  distance: number;
}
