import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { MOCK_TRAIN_ARRIVALS } from "../../testUtils/__mocks__/train";
import { getAllTrainArrivals, TRAIN_URL } from "./trains";

const mockAdapter = new MockAdapter(axios);

describe("Bus related service calls", () => {
  describe("Successes", () => {
    it("getAllBusStops should get all buses", async () => {
      mockAdapter.onGet(TRAIN_URL).reply(200, MOCK_TRAIN_ARRIVALS);
      const trains = await getAllTrainArrivals();
      expect(trains).toEqual(MOCK_TRAIN_ARRIVALS);
    });
  });
  describe("Failures", () => {
    it("getAllBusStops", async () => {
      mockAdapter.onGet(TRAIN_URL).reply(404, "Error getting buses");
      try {
        await getAllTrainArrivals();
      } catch (err) {
        expect(err.data).toEqual("Error getting buses");
      }
    });
  });
});
