import React from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";

import useStyles from "./styles";

export default function List() {
  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "salary",
      amount: 100,
      data: new Date(),
    },
    {
      id: 2,
      type: "Expense",
      category: "Office",
      amount: 500,
      data: new Date(),
    },
    {
      id: 3,
      type: "Income",
      category: "salary",
      amount: 100,
      date: new Date(),
    },
  ];

  const classes = useStyles();
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transition.category}
              secondary={`$${transition.amount} - ${transition.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
}
