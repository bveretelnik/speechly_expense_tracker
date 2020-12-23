import React from "react";
import { Grid } from "@material-ui/core";

import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4} className={classes.mobile}>
          {/* Details */}
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          {/* Main */}
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          {/* Details */}
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          {/* <Details title="Expense" /> */}
        </Grid>
      </Grid>
    </div>
  );
};
export default App;
