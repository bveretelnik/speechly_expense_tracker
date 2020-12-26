import React, { useContext, useState } from "react";
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
import { v4 as uuidv4 } from "uuid";

import Snackbar from "../../Snackbar/Snackbar";
import useStyles from "./styles";
import formatDate from "../../../utisl/formatDate";
import { ExpenseContext } from "../../context/ExpenseReducer/expenseContext";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: formatDate(new Date()),
};

export default function Form() {
  const classes = useStyles();
  const { addTransaction } = useContext(ExpenseContext);
  const [formatData, setFormData] = useState(initialState);

  const createTransaction = () => {
    addTransaction({
      ...formatData,
      amount: Number(formatData.amount),
      id: uuidv4(),
    });
    setFormData(initialState);
  };
  const selectedCategories =
    formatData.type === "Income" ? incomeCategories : expenseCategories;
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
          <Select
            value={formatData.type}
            onChange={(e) =>
              setFormData({ ...formatData, type: e.target.value })
            }
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formatData.category}
            onChange={(e) =>
              setFormData({ ...formatData, category: e.target.value })
            }
          >
            {selectedCategories.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          type="number"
          label="Amount"
          value={formatData.amount}
          onChange={(e) =>
            setFormData({ ...formatData, amount: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Date"
          type="date"
          value={formatData.date}
          onChange={(e) =>
            setFormData({ ...formatData, date: formatDate(e.target.value) })
          }
        />
      </Grid>
      <Grid>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          fullWidth
          onClick={createTransaction}
        >
          Create
        </Button>
      </Grid>
    </Grid>
  );
}
