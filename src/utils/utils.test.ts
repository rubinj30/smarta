import { convertMetersToMiles } from "./convertMetersToMiles";

describe("utils", () => {
  it("convertMetersToMiles", () => {
    const miles = convertMetersToMiles(10000);
    expect(miles).toEqual(6.21371192);
  });
});
