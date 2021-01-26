import axios from "axios";
import { TrainArrival } from "../../interfaces";

export let TRAIN_URL = `https://cors-anywhere.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=${process.env.REACT_APP_MARTA_KEY}`;

export const getAllTrainArrivals = async () => {
  try {
    const response = await axios.get<TrainArrival[]>(TRAIN_URL);
    return response.data;
  } catch (error) {
    throw error.response;
  }
};
