import { Tooltip, Typography } from "@material-ui/core";
import { format } from "date-fns";
import React from "react";

export const formatTimeForColumn = (value: any) => {
  const time = new Date(value);
  const formattedTime = format(time, "h:mm aaaaa'm'");
  return formattedTime;
};

export const allBusColumns = [
  {
    label: "from",
    name: "distance",
    options: {
      width: 100,
      customBodyRender: (value: number) => `${value.toFixed(1)}mi`,
    },
  },
  {
    // TODO: still a little unsure of what this field exactly is for
    label: "last pickup",
    name: "MSGTIME",
    options: {
      customBodyRender: (value: any) => formatTimeForColumn(value),
    },
  },
  {
    label: "location",
    name: "TIMEPOINT",
  },
  {
    label: "route",
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
