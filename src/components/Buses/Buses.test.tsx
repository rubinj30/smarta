import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../test-utils";
import { Buses } from "./Buses";
import renderWithRedux, { defaultStore } from "../../testUtils/renderWithRedux";

describe("Buses", () => {
  it("renders", () => {
    renderWithRedux(<Buses />);
    screen.debug();
  });
  it("", () => {
    renderWithRedux(<Buses />);
  });
});
