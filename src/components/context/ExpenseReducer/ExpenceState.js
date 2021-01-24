import React, { useReducer } from "react";
import { ADD_TRANSACTION, DELETE_TRANSACTION } from "../type";
import { ExpenseContext } from "./expenseContext";
import expenseReducer from "./expenseReducer";

export default function ExpenceState({ children }) {
  const initialState = JSON.parse(localStorage.getItem("transactions")) || [];
  const [transactions, dispatch] = useReducer(expenseReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({ type: ADD_TRANSACTION, payload: transaction });
  };
  const deleteTransaction = (id) => {
    dispatch({ type: DELETE_TRANSACTION, payload: id });
  };
  const balance = transactions.reduce(
    (acc, curVal) =>
      curVal.type === "Expense" ? acc - curVal.amount : acc + curVal.amount,
    0
  );
  return (
    <ExpenseContext.Provider
      value={{
        transactions,
        balance,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
