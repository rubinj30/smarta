import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import { Homepage } from "./Homepage";

describe("Homepage", () => {
  it("renders", () => {
    render(<Homepage />);
  });
});
