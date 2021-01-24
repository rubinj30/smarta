import axios from "axios";

export const proxy_url = "https://cors-anywhere.herokuapp.com/";
export const BUS_URL_BASE =
  "http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService";

// TODO: getting CORS errors for above URL while running locally, so setting up workaround for development
// need to add condition to only proxy IF in dev
export const ALL_BUSES_URL = `${proxy_url}${BUS_URL_BASE}/GetAllBus`;

export const BUS_BY_ROUTE = `${proxy_url}${BUS_URL_BASE}/GetBusByRoute`;

export const getAllBusStops = async () => {
  try {
    const response = await axios.get(ALL_BUSES_URL);
    return response.data;
  } catch (error) {
    throw error.response;
  }
};

export const getBusByRoute = async (route: string) => {
  const url = `${BUS_BY_ROUTE}/${route}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error.response;
  }
};
