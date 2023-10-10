import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Users = ({ rows }) => {
  const columns = [
    // { field: "id", headerName: "No.", width: 200 },
    { field: "id", headerName: "Id", width: 100 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "email", headerName: "Email", width: 500 },
    { field: "phone", headerName: "Phone", width: 500 },
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

export default Users;
