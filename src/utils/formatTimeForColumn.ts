import { format } from "date-fns";

export const formatTimeForColumn = (value: any) => {
  const time = new Date(value);
  const formattedTime = format(time, "h:mm aaaaa'm'");
  return formattedTime;
};
