import { WindowSize } from "../interfaces";

export const genWindowSize = (width: number) => {
  let windowSize: WindowSize = "small";
  if (width > 800) {
    windowSize = "large";
  } else if (width > 500) {
    windowSize = "medium";
  }
  return windowSize;
};
