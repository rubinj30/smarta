export interface TrainArrival {
  DESTINATION: string;
  DIRECTION: string;
  EVENT_TIME: string;
  LINE: string;
  NEXT_ARR: string;
  STATION: string;
  TRAIN_ID: string;
  WAITING_SECONDS: string;
  WAITING_TIME: string;
}

export interface TrainArrivalWithDistance extends TrainArrival {
  distance: number;
}
