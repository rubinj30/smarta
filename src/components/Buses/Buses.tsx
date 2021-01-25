import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BusStop, Position } from "../../interfaces";
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
    <Box margin={2}>
      <DataTable
        title="All Bus Stops"
        data={stopsWithDistance}
        columns={allBusColumns}
      />
    </Box>
  );
};
