import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Todos = ({ rows }) => {
  const columns = [
    // { field: "id", headerName: "No.", width: 200 },
    { field: "id", headerName: "Id", width: 100 },
    { field: "userId", headerName: "User Id", width: 200 },
    { field: "title", headerName: "Title", width: 500 },
    { field: "completed", headerName: "Complete", width: 400 },
  ];
  const rowsWithNo = rows.map((row, index) => ({
    ...row,
    id: index + 1,
  }));

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rowsWithNo}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
      />
    </div>
  );
};

export default Todos;
