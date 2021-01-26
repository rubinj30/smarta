import axios from "axios";
import { BusStop } from "../../interfaces";

export const ALL_BUSES_URL = `${process.env.REACT_APP_BUS_URL_BASE}/GetAllBus`;

export const BUS_BY_ROUTE = `${process.env.REACT_APP_BUS_URL_BASE}/GetBusByRoute`;

export const getAllBusStops = async () => {
  try {
    const response = await axios.get<BusStop[]>(ALL_BUSES_URL);
    return response.data;
  } catch (error) {
    console.log("error", error);
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
