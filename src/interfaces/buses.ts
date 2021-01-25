export interface BusStop {
  ADHERENCE: string;
  BLOCKID: string;
  BLOCK_ABBR: string;
  DIRECTION: string;
  LATITUDE: string;
  LONGITUDE: string;
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
