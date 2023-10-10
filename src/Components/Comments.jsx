import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Comments = ({ rows }) => {
  const columns = [
    // { field: "id", headerName: "No.", width: 200 },
    { field: "id", headerName: "Id", width: 100 },
    { field: "postId", headerName: "Post Id", width: 100 },
    { field: "name", headerName: "Name", width: 300 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "body", headerName: "Body", width: 400 },
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

export default Comments;
