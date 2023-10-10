import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "./Components/Post";
import Users from "./Components/Users";
import Todos from "./Components/Todos";
import Comments from "./Components/Comments";

const FetchApi = () => {
  const [typeReference, setTypeReference] = useState("posts");
  const [storeItems, setStoreItems] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${typeReference}`)
      .then((response) => response.json())
      .then((json) => setStoreItems(json));
  }, [typeReference]);
  const btnTypes = [
    {
      id: 1,
      type: "posts",
      value: "Posts",
    },
    {
      id: 2,
      type: "users",
      value: "Users",
    },
    {
      id: 3,
      type: "todos",
      value: "Todos",
    },
    {
      id: 4,
      type: "comments",
      value: "Comments",
    },
  ];
  return (
    <Grid>
      <Box sx={{ display: "flex", columnGap: "10px", marginTop: "20px" }}>
        {btnTypes.map((item) => (
          <Button
            key={item.id}
            variant="contained"
            onClick={() => setTypeReference(item.type)}
          >
            {item.value}
          </Button>
        ))}
      </Box>
      <Typography variant="h4" sx={{ margin: "30px 0" }}>
        {typeReference}
      </Typography>
      {(() => {
        if (typeReference === "posts") {
          return <Post rows={storeItems} />;
        } else if (typeReference === "users") {
          return <Users rows={storeItems} />;
        } else if (typeReference === "todos") {
          return <Todos rows={storeItems} />;
        } else if (typeReference === "comments") {
          return <Comments rows={storeItems} />;
        }
      })()}
    </Grid>
  );
};

export default FetchApi;
