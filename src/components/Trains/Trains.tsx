import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Position } from "../../interfaces";
import { RootState } from "../../redux/store";
import { DataTable } from "../DataTable/DataTable";
import { appendDistanceToStops } from "../../utils/appendDistanceToStops";
import { genBusColumns } from "../../utils/genBusColumns";
import { genWindowSize } from "../../utils/genWindowSize";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { genTrainColumns } from "../../utils/genTrainColumns";

export const Trains = () => {
  const { allTrainArrivals } = useSelector((state: RootState) => state.global);
  console.log({ allTrainArrivals });

  // custom hook to listen and return window width
  const width = useWindowWidth();

  // generates breakpoint name for columns
  const windowSize = genWindowSize(width);

  return (
    <Box margin={{ base: 1, md: 4, lg: 10 }} data-testid="trains-data-table">
      <DataTable
        title="All Train Stops"
        type="train"
        data={allTrainArrivals}
        data-testid="trains-data-table"
        columns={genTrainColumns(windowSize)}
      />
    </Box>
  );
};
