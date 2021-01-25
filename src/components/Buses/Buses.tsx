import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Position } from "../../interfaces";
import { RootState } from "../../redux/store";
import { DataTable } from "../DataTable/DataTable";
import { appendDistanceToStops } from "../../utils/appendDistanceToStops";
import { usePosition } from "use-position";
import { genBusColumns } from "../../utils/allBusColumns";
import { genWindowSize } from "../../utils/genWindowSize";

export const Buses = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const { allBusStops } = useSelector((state: RootState) => state.global);
  const position = usePosition(false);
  const stopsWithDistance = appendDistanceToStops(
    allBusStops,
    position as Position
  );

  React.useEffect(() => {
    // using this to dynamically generate different column headers, contents since the widths are not controllable with MUIDatatable
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  const windowSize = genWindowSize(width);

  return (
    <Box margin={{ base: 1, md: 4, lg: 10 }}>
      <DataTable
        title="All Bus Stops"
        data={stopsWithDistance}
        columns={genBusColumns(windowSize)}
      />
    </Box>
  );
};
