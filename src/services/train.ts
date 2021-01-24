import axios from "axios";

// TODO: getting CORS errors for above URL while running locally, so setting up workaround for development
// need to add condition to only proxy IF in dev
export let TRAIN_URL = `https://cors-anywhere.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=${process.env.REACT_APP_MARTA_KEY}`;

export const getAllTrainRoutes = async () => {
  try {
    const response = await axios.get(TRAIN_URL);
    return response.data;
  } catch (error) {
    throw error.response;
  }
};
