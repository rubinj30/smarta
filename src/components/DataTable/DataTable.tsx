import MUIDataTable from "mui-datatables";
import { FC } from "react";
import { BusStopWithDistance, TrainArrival } from "../../interfaces";

interface Column {
  label: string;
  name: string;
  option?: {
    customBodyRender: any;
  };
}

interface DataTableProps {
  title: string;
  data: BusStopWithDistance[] | TrainArrival[];
  columns: Column[];
  type: "bus" | "train";
}

export const DataTable: FC<DataTableProps> = (props) => {
  const { title, data, columns, type } = props;
  return (
    <MUIDataTable
      title={title}
      data={data}
      columns={columns}
      options={{
        selectableRows: "none",
        responsive: "standard",
        download: false,
        print: false,
        sortOrder: {
          name: type === "bus" ? "distance" : "NEXT_ARR",
          direction: "asc",
        },
      }}
    />
  );
};
