import { useWindowWidth } from "./useWindowWidth";
import { renderHook, act } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/react";
describe("hooks", () => {
  beforeEach(() => {
    act(() => {
      // @ts-ignore
      window.innerWidth = 50;
    });
  });
  describe("useWindowWidth", () => {
    it("should return the window.innerWidth", () => {
      const { result } = renderHook(() => useWindowWidth());
      expect(result.current).toEqual(50);
    });
    it("should return updated window width when resized", () => {
      const { result } = renderHook(() => useWindowWidth());
      expect(result.current).toEqual(50);
      act(() => {
        // @ts-ignore
        window.innerWidth = 500;

        // Trigger the window resize event.
        fireEvent(window, new Event("resize"));
      });
      expect(result.current).toEqual(500);
    });
  });
});
