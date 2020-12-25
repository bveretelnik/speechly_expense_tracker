import React from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import Snackbar from "../../Snackbar/Snackbar";
import useStyles from "./styles";

export default function Form() {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Snackbar />
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          <div></div>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select>{/* ...... */}</Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField />
      </Grid>
      <Grid item xs={6}>
        <TextField />
      </Grid>
      <Grid>
        <Button
          className={classes.button}
          variant="outlined"
          color="pripary"
          fullWidth
        >
          Create
        </Button>
      </Grid>
    </Grid>
  );
}
