import { WindowSize } from "../interfaces";
import { formatTimeForColumn } from "./formatTimeForColumn";
import { Typography } from "@material-ui/core";
import React from "react";

export const genTrainColumns = (size: WindowSize) => {
  const isLarge = size === "large";
  const isSmall = size === "small";
  const locationTextProps = isSmall
    ? {
        maxWidth: 150,
      }
    : { background: "none" };
  let trainColumns = [
    {
      label: "direction",
      name: "DIRECTION",
    },
    {
      label: `next arrival${isLarge ? " time" : ""}`,
      name: "NEXT_ARR",
    },
    {
      label: "station",
      name: "STATION",
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
      label: "destination",
      name: "DESTINATION",
      options: {
        customBodyRender: (value: string) => {
          // @ts-ignore
          return (
            <Typography style={{ ...locationTextProps }}>{value}</Typography>
          );
        },
      },
    },
  ];

  !isSmall &&
    trainColumns.push({
      label: "Line",
      name: "LINE",
    });
  isLarge &&
    trainColumns.push({
      label: "Train ID",
      name: "TRAIN_ID",
    });
  isLarge &&
    trainColumns.push({
      label: "Status",
      name: "WAITING_TIME",
    });
  return trainColumns;
};
