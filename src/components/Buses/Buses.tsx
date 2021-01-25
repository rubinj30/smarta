import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Position } from "../../interfaces";
import { RootState } from "../../redux/store";
import { DataTable } from "../DataTable/DataTable";
import { appendDistanceToStops } from "../../utils/appendDistanceToStops";
import { usePosition } from "use-position";
import { allBusColumns } from "../../utils/allBusColumns";

export const Buses = () => {
  const { allBusStops } = useSelector((state: RootState) => state.global);
  const position = usePosition(false);
  const stopsWithDistance = appendDistanceToStops(
    allBusStops,
    position as Position
  );
  return (
    <Box margin={{ base: 1, md: 4, lg: 10 }}>
      <DataTable
        title="All Bus Stops"
        data={stopsWithDistance}
        columns={allBusColumns}
      />
    </Box>
  );
};
