import { Position } from "../interfaces";
import { MOCK_BUS_STOPS } from "../testUtils/__mocks__/bus";
import { MOCK_POSITION } from "../testUtils/__mocks__/position";
import { formatTimeForColumn, genBusColumns } from "./genBusColumns";
import { appendDistanceToStops } from "./appendDistanceToStops";
import { convertMetersToMiles } from "./convertMetersToMiles";
import { organizeBusesByRoute } from "./organizeBusesByRoute";

describe("utils", () => {
  it("convertMetersToMiles should convert meters to miles", () => {
    const miles = convertMetersToMiles(10000);
    expect(miles).toEqual(6.21371192);
  });

  it("formatTimeForColumn should format and return date in appropriate format", () => {
    const formattedDateTime = formatTimeForColumn(
      new Date("2021-01-25T00:37:56.548Z")
    );
    expect(formattedDateTime).toEqual("7:37 pm");
  });
  it("organizeBusesByRoute should ", () => {
    const organizedStopsByRoute = organizeBusesByRoute(
      MOCK_BUS_STOPS.slice(0, 3)
    );
    expect(organizedStopsByRoute).toEqual({
      "185": [MOCK_BUS_STOPS[0], MOCK_BUS_STOPS[2]],
      "73": [MOCK_BUS_STOPS[1]],
    });
  });
  describe("appendDistanceToStops", () => {
    it("should append distance from position's latitude/longitude to each stop data point", () => {
      const mockBusStops = MOCK_BUS_STOPS.slice(0, 2);
      const stopsWithDistances = appendDistanceToStops(
        mockBusStops,
        MOCK_POSITION
      );
      expect(stopsWithDistances).toEqual([
        {
          ...mockBusStops[0],
          distance: 19.110425193483128,
        },
        {
          ...mockBusStops[1],
          distance: 13.625147957925302,
        },
      ]);
    });
    it("should append distance from default latitude/longitude to each stop data point, if not found in position", () => {
      const mockBusStops = MOCK_BUS_STOPS.slice(0, 2);
      const stopsWithDistances = appendDistanceToStops(
        mockBusStops,
        {} as Position
      );
      expect(stopsWithDistances).toEqual([
        {
          ...mockBusStops[0],
          distance: 10.885346300276844,
        },
        {
          ...mockBusStops[1],
          distance: 17.77306497771462,
        },
      ]);
    });
  });
  describe("genBusColumns", () => {
    it("small should generate 4 columns with condensed titles", () => {
      const smallColumns = genBusColumns("small");
      expect(smallColumns.length).toEqual(4);
      expect(smallColumns[0].label).toEqual("from");
      expect(smallColumns[1].label).toEqual("last pickup");
    });
    it("medium should generate 5 with less condensed titles", () => {
      const medColumns = genBusColumns("medium");
      expect(medColumns.length).toEqual(5);
      expect(medColumns[0].label).toEqual("distance from");
      expect(medColumns[1].label).toEqual("last pickup");
    });
    it("large should generate 5 columns with max length titles", () => {
      const largeColumns = genBusColumns("large");
      expect(largeColumns.length).toEqual(6);
      expect(largeColumns[0].label).toEqual("distance from");
      expect(largeColumns[1].label).toEqual("last pickup time");
    });
  });
});
