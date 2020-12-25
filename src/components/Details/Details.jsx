import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";

import useStyles from "./styles";

export default function Details({ title }) {
  const classes = useStyles();

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${title}</Typography>
      </CardContent>
    </Card>
  );
}
