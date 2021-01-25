import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BusStop } from "../../interfaces";
import { RootState } from "../../redux/store";
import { DataTable } from "../DataTable/DataTable";
import { format } from "date-fns";
import { appendDistanceToStops } from "../../utils/appendDistanceToStops";
import { usePosition } from "use-position";

export const Buses = () => {
  const { allBusStops } = useSelector((state: RootState) => state.global);
  const position = usePosition(false);
  const stopsWithDistance = appendDistanceToStops(allBusStops, position);
  return (
    <Box margin={2}>
      <DataTable
        title="All Bus Stops"
        data={stopsWithDistance}
        columns={columns}
      />
    </Box>
  );
};

const organizeBusesByRoutes = (busStops: BusStop[]) => {
  const routes = busStops.reduce((acc, stop) => {
    if (stop.ROUTE in acc) {
      acc[stop.ROUTE].push(stop);
    } else {
      acc[stop.ROUTE] = [stop];
    }
    return acc;
  }, {} as any);
  return routes;
};

const columns = [
  {
    label: "distance from (mi)",
    name: "distance",
    options: {
      width: 100,
      customBodyRender: (value: number) => value.toFixed(1),
    },
  },
  {
    label: "next stop",
    name: "MSGTIME",
    options: {
      customBodyRender: (value: any) => {
        const dateTime = new Date(value);
        const formattedDateTime = format(dateTime, "h:mm aaaaa'm' - M/dd");
        return formattedDateTime;
      },
    },
  },
  {
    label: "where",
    name: "TIMEPOINT",
    width: 100,
  },
  {
    label: "route #",
    name: "ROUTE",
    width: 100,
  },
  // {
  //     label: "VEHICLE",
  //     name: "VEHICLE",

  // },
  // {
  //   label: "TRIPID",
  //   name: "TRIPID",
  // },

  // // {
  // //     label: "STOPID",
  // //     name: "STOPID",

  // // },
  // {
  //   label: "lng",
  //   name: "LONGITUDE",
  // },
  // {
  //   label: "lat",
  //   name: "LATITUDE",
  // },
  // {
  //   label: "direction",
  //   name: "DIRECTION",
  // },
  // {
  //     label: "BLOCK_ABBR",
  //     name: "BLOCK_ABBR",

  // },
  // {
  //     label: "BLOCKID",
  //     name: "BLOCKID",

  // },
  // {
  //     label: "adherence",
  //     name: "ADHERENCE",

  // },
];
