import React from "react";
import { screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import renderWithRouter from "../../testUtils/renderWithRouter";
import { SidebarBody } from "./SidebarBody/SidebarBody";

describe("Sidebar", () => {
  let onCloseMock: any, onOpenMock: any;

  beforeEach(() => {
    onCloseMock = jest.fn();
    onOpenMock = jest.fn();
  });

  it("renders", () => {
    renderWithRouter(
      <Sidebar onClose={onCloseMock} onOpen={onOpenMock} open={true} />
    );
  });
  it("renders open", () => {
    renderWithRouter(
      <Sidebar onClose={onCloseMock} onOpen={onOpenMock} open={true} />
    );
    screen.getByText("Transit");
    // screen.debug()
  });
  describe("SidebarBody", () => {
    renderWithRouter(<SidebarBody onClose={onCloseMock} />);
  });
});
