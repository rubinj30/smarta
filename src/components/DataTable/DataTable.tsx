import MUIDataTable from "mui-datatables";
import { FC } from "react";
import { BusStopWithDistance } from "../../interfaces";

interface Column {
  label: string;
  name: string;
}

interface DataTableProps {
  title: string;
  // add TrainStop in future so this table can be re-used
  data: BusStopWithDistance[];
  columns: Column[];
}

export const DataTable: FC<DataTableProps> = (props) => {
  const { title, data, columns } = props;
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
          name: "distance",
          direction: "asc",
        },
      }}
    />
  );
};
