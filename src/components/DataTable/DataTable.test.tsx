import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../testUtils/test-utils";
import { DataTable } from "./DataTable";
import { act } from "react-dom/test-utils";
import {
  MOCK_BUS_STOPS,
  MOCK_BUS_STOPSForRoute,
} from "../../testUtils/__mocks__/bus";
import { appendDistanceToStops } from "../../utils/appendDistanceToStops";

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

describe("DataTable", () => {
  it("renders with title provided", () => {
    const mockBusStopsWithDistances = appendDistanceToStops(
      MOCK_BUS_STOPS.slice(0, 2),
      { latitude: 10, longitude: 10 }
    );
    render(
      <DataTable
        title="test title"
        data={mockBusStopsWithDistances}
        columns={[{ label: "Test Label", name: "distance" }]}
      />
    );
    expect(screen.getByText("test title")).toBeTruthy();
  });
});
