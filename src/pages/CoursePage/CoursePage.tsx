import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import withLayout from "../../layout/withLayout";

function CoursePage() {
  return (
    <Grid container
      justifyContent='flex-start'
      direction='column'
      alignItems='center'
      style={{
        margin: "48px 0",
        height: "50vh",
      }}
    >
      <Typography align="center" style={{ fontSize: "32px" }} color="secondary">
        COMING SOON
      </Typography>
      <Link to="/">
        <Button color="secondary" variant="contained">
          <Typography variant="h5">Về trang chủ</Typography>
        </Button>
      </Link>
    </Grid>
  );
}

export default withLayout(CoursePage);
