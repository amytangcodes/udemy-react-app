import React from "react";
import Typography from "@material-ui/core/Typography";

import Page from "../shared/Page";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const Index = () => {
  return (
    <Page heading="React Redux | Songs">
      <div className="App">
        <div className="container">
          <Typography component="h1" variant="h2">
            Songs
          </Typography>
          <div className="flex songs-container">
            <SongList />
            <SongDetail />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Index;
