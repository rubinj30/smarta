import axios from "axios";

const BUS_URL =
  "http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus";

export const getAllBusRoutes = async () => {
  try {
    const response = await axios.get(BUS_URL);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
