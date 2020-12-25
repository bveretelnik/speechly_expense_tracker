import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import useStyles from "./styles";

export default function CustomizedSnackbar() {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickway") return;
    // setOpen(false)
  };
  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={handleClose}
        autoHideDuration={600}
      >
        <MuiAlert severity="success" elevation={6} variant="filled">
          Transaction successfully created.
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
