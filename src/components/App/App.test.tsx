import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../testUtils/test-utils";
import { App } from "./App";
import { act } from "react-dom/test-utils";

const mockOnClose = jest.fn();
const mockOnOpen = jest.fn();

jest.mock("@chakra-ui/react", () => ({
  ...(jest.requireActual("@chakra-ui/react") as Object),
  useDisclosure: () => ({
    onClose: mockOnClose,
    isOpen: true,
    onOpen: mockOnOpen,
  }),
}));

describe("App", () => {
  it("renders", () => {
    render(<App />);
  });
  it("clicking hamburger icon calls onOpen", () => {
    render(<App />);
    act(() => {
      fireEvent.click(screen.getByTestId("hamburger-icon"));
    });
    expect(mockOnOpen).toHaveBeenCalled();
  });
});
