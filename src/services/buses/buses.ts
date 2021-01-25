import axios from "axios";
import { BusStop } from "../../interfaces";

export const BUS_URL_BASE =
  "http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService";

export const ALL_BUSES_URL = `${BUS_URL_BASE}/GetAllBus`;

export const BUS_BY_ROUTE = `${BUS_URL_BASE}/GetBusByRoute`;

export const getAllBusStops = async () => {
  try {
    const response = await axios.get<BusStop[]>(ALL_BUSES_URL);
    const response2 = await axios.get<BusStop[]>(
      "https://cors-anywhere.herokuapp.com/" + ALL_BUSES_URL
    );
    const response3 = await axios.get<BusStop[]>(
      "https://cors-anywhere.herokuapp.com/http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/GetAllBus"
    );
    console.log(response);
    console.log(response2);
    console.log(response3);

    return response2.data;
  } catch (error) {
    console.log("error in service", error);
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
