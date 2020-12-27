import React from "react";

const isIncome = Math.round(Math.random());

export default function InfoCard() {
  return (
    <div elevation={3} style={{ textAlign: "center", padding: "0 10%" }}>
      Try saing: <br />
      Add {isIncome ? "$100" : "Expense"}
      for {isIncome ? "$100" : "$50"}
      in Category {isIncome ? "Salary" : "Travel"}
      for {isIncome ? "Monday" : "Thursday"}
    </div>
  );
}
