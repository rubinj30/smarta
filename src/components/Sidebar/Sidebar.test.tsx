import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  it("renders", () => {
    render(<Sidebar />);
  });
});
