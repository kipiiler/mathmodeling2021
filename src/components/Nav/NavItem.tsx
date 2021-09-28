import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/UpperCaseFirstLetter";

export default function NavItem({ link, fontWeight }: any) {
  const path = useLocation();
  return (
    <Grid item style={{ width: "initial" }}>
      <Link
        to={`/${link}`}
        style={{
          textDecoration: "none",
        }}
      >
        <Typography
          variant="h3"
          style={{
            color: "/" + link === path.pathname ? "#8CC2E3" : "white",
            fontWeight:
              "/" + link === path.pathname ? fontWeight + 100 : fontWeight,
          }}
        >
          {link === "" ? "Home" : capitalizeFirstLetter(link)}
        </Typography>
      </Link>
    </Grid>
  );
}
