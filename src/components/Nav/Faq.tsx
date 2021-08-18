import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

export default function FAQDisplay({ question, answer }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      style={{ padding: 8, marginTop: 24, cursor: "pointer" }}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <b>
        <Typography align="center" variant="h4" color="secondary" gutterBottom>
          {question}
        </Typography>
      </b>
      <Typography
        align="center"
        variant="h4"
        color="textPrimary"
        style={{ display: open ? "" : "none" }}
      >
        {answer}
      </Typography>
    </Grid>
  );
}
