import { Typography } from "@material-ui/core";
import { format } from "date-fns";
import React from "react";
import { WindowSize } from "../interfaces";

export const formatTimeForColumn = (value: any) => {
  const time = new Date(value);
  const formattedTime = format(time, "h:mm aaaaa'm'");
  return formattedTime;
};

export const genBusColumns = (size: WindowSize) => {
  const isLarge = size === "large";
  const isSmall = size === "small";
  const locationTextProps = isSmall
    ? {
        maxWidth: 150,
      }
    : { background: "none" };
  let busColumns = [
    {
      label: `${!isSmall ? "distance " : ""}from`,
      name: "distance",
      options: {
        customBodyRender: (value: number) => `${value.toFixed(1)}mi`,
      },
    },
    {
      // TODO: still a little unsure of what this field exactly is for
      label: `last pickup ${isLarge ? "time" : ""}`,
      name: "MSGTIME",
      options: {
        customBodyRender: (value: any) => formatTimeForColumn(value),
      },
    },
    {
      label: "location",
      name: "TIMEPOINT",
      options: {
        customBodyRender: (value: string) => {
          // @ts-ignore
          return (
            <Typography style={{ ...locationTextProps }}>{value}</Typography>
          );
        },
      },
    },
    {
      label: "direction",
      name: "DIRECTION",
      options: {
        customBodyRender: (value: string) =>
          isSmall ? value.replace("bound", "") : value,
      },
    },
  ];

  !isSmall &&
    busColumns.push({
      label: `route${!isSmall ? " #" : ""}`,
      name: "ROUTE",
    } as any);
  isLarge &&
    busColumns.push({
      label: "Stop ID",
      name: "STOPID",
    } as any);

  return busColumns;
};
