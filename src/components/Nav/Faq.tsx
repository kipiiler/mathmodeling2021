import { Grid, Typography } from "@material-ui/core";
import React from "react";

interface Props {
  question: string;
  answer: string;
}

export default function FAQDisplay({ question, answer }: Props) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      style={{ padding: 8, marginTop: 24 }}
    >
      <b>
        <Typography align="center" variant="h4" color="secondary" gutterBottom>
          {question}
        </Typography>
      </b>
      <Typography align="center" variant="h4" color="textPrimary">
        {answer}
      </Typography>
    </Grid>
  );
}
