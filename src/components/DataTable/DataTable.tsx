import MUIDataTable from "mui-datatables";
import React, { FC } from "react";
import { BusStop } from "../../interfaces";

interface Column {
  label: string;
  name: string;
}

interface DataTableProps {
  title: string;
  data: BusStop[];
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
        responsive: "standard",
        searchOpen: true,
        download: false,
        print: false,
      }}
    />
  );
};