import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BusStop, TrainArrival } from "../../../interfaces";

export interface GlobalSlice {
  loading: boolean;
  error: string | undefined;
  allBusStops: BusStop[];
  allTrainArrivals: TrainArrival[];
}

const globalSlice = createSlice({
  name: "global",
  initialState: {
    loading: false,
    error: undefined,
    allBusStops: [],
    allTrainArrivals: [],
  } as GlobalSlice,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      return state;
    },
    setError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
      return state;
    },
    setAllBusStops: (state, action: PayloadAction<BusStop[]>) => {
      state.allBusStops = action.payload;
      return state;
    },
    setAllTrainArrivals: (state, action: PayloadAction<TrainArrival[]>) => {
      state.allTrainArrivals = action.payload;
      return state;
    },
  },
});

export const setLoading: (payload: boolean) => Action<string> =
  globalSlice.actions.setLoading;
export const setError: (payload: string | undefined) => Action<string> =
  globalSlice.actions.setError;
export const setAllBusStops: (payload: BusStop[]) => Action<string> =
  globalSlice.actions.setAllBusStops;
export const setAllTrainArrivals: (payload: TrainArrival[]) => Action<string> =
  globalSlice.actions.setAllTrainArrivals;

export default globalSlice.reducer;
