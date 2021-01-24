import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BusStop } from "../../interfaces";
import { RootState } from "../../redux/store";
import { DataTable } from "../DataTable/DataTable";

export const Buses = () => {
  const { allBusStops } = useSelector((state: RootState) => state.global);
  useEffect(() => {
    allBusStops.length > 0 && organizeBusesByRoutes(allBusStops);
  }, [allBusStops]);

  return (
    <Box>
      <Heading>All Bus Stops</Heading>
      <DataTable title="Bus Stops" data={allBusStops} columns={columns} />
    </Box>
  );
};

const organizeBusesByRoutes = (busStops: BusStop[]) => {
  const routes = busStops.reduce((acc, stop) => {
    if (stop.ROUTE in acc) {
      console.log("STOP", stop);
      acc[stop.ROUTE].push(stop);
    } else {
      acc[stop.ROUTE] = [stop];
    }
    return acc;
  }, {} as any);

  return routes;
};

interface BusesByRoute {
  [key: string]: BusStop[];
}

const columns = [
  {
    label: "distance (mi)",
    name: "distance",
  },
  {
    label: "where",
    name: "TIMEPOINT",
  },
  {
    label: "route",
    name: "ROUTE",
  },
  // {
  //     label: "VEHICLE",
  //     name: "VEHICLE",

  // },
  {
    label: "TRIPID",
    name: "TRIPID",
  },
  {
    label: "time",
    name: "MSGTIME",
  },
  // {
  //     label: "STOPID",
  //     name: "STOPID",

  // },
  {
    label: "lng",
    name: "LONGITUDE",
  },
  {
    label: "lat",
    name: "LATITUDE",
  },
  {
    label: "direction",
    name: "DIRECTION",
  },
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
