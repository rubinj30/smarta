import globalReducer, { setError, setLoading } from "./globalSlice";

describe("globalSlice", () => {
  it("should set loading to true", () => {
    const isLoading = true;
    const action = setLoading(isLoading);
    const newState = globalReducer(undefined, action);
    expect(newState.loading).toEqual(isLoading);
  });

  it("should set loading to false", () => {
    const isNotLoading = false;
    const action = setLoading(isNotLoading);
    const newState = globalReducer(undefined, action);
    expect(newState.loading).toEqual(isNotLoading);
  });

  it("should set error to passed in error", () => {
    const action = setError("test error");
    const newState = globalReducer(undefined, action);
    expect(newState.error).toEqual("test error");
  });
});
