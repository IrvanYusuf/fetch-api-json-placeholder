import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Post = ({ rows }) => {
  const columns = [
    // { field: "id", headerName: "No.", width: 200 },
    { field: "id", headerName: "Id", width: 200 },
    { field: "userId", headerName: "User ID", width: 200 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body", width: 500 },
  ];
  // const rowsWithNo = rows.map((row, index) => ({
  //   ...row,
  //   id: index + 1,
  // }));

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rows}
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

export default Post;
