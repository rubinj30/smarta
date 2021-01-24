import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  mockBusRoutes,
  mockBusStopsForRoute,
} from "../../testUtils/__mocks__/bus";
import {
  getAllBusStops,
  getBusByRoute,
  ALL_BUSES_URL,
  BUS_BY_ROUTE,
} from "./buses";

const mockAdapter = new MockAdapter(axios);

describe("Bus related service calls", () => {
  describe("Successes", () => {
    it("getAllBusStops should get all buses", async () => {
      mockAdapter.onGet(ALL_BUSES_URL).reply(200, mockBusRoutes);
      const buses = await getAllBusStops();
      expect(buses).toEqual(mockBusRoutes);
    });
    it("getBusByRoute should get all bus stops for a specific route", async () => {
      const mockBus = mockBusRoutes[1];
      const mockUrl = `${BUS_BY_ROUTE}/${mockBus.ROUTE}`;
      mockAdapter.onGet(mockUrl).reply(200, mockBusStopsForRoute);
      const buses = await getBusByRoute(mockBus.ROUTE);
      expect(buses).toEqual(mockBusStopsForRoute);
    });
  });
  describe("Failures", () => {
    it("getAllBusStops", async () => {
      mockAdapter.onGet(ALL_BUSES_URL).reply(404, "Error getting buses");
      try {
        await getAllBusStops();
      } catch (err) {
        expect(err.data).toEqual("Error getting buses");
      }
    });
  });
});
