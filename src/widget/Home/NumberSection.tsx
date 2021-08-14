import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Logo from "../../static/mathmodellogo.png";

function NumberColumn({ bigtitle, smalltitle, body }: any) {
  return (
    <Grid
      item
      xs={3}
      style={{ padding: "40px 10px", borderRight: "2px solid white" }}
    >
      <Grid container direction="column">
        <Grid>
          <img src={Logo} height={100} width={100} />
        </Grid>
        <Grid>
          <Typography
            variant="h5"
            color="secondary"
            style={{ fontSize: "48px" }}
          >
            {bigtitle}
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="h2" color="secondary" gutterBottom>
            {smalltitle}
          </Typography>
        </Grid>
        <Grid>
          <Typography
            variant="h4"
            color="secondary"
            gutterBottom
            style={{ marginTop: 16 }}
          >
            {body}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default function NumberSection() {
  return (
    <div>
      <Grid style={{ margin: "80px 0 40px 0" }}>
        <Typography
          style={{ fontSize: "40px" }}
          align="center"
          variant="h2"
          color="secondary"
        >
          NHỮNG CON SỐ ẤN TƯỢNG
        </Typography>
      </Grid>
      <Grid container style={{ background: "#E8ECF1", padding: "40px 0" }}>
        <NumberColumn
          bigtitle={600}
          smalltitle={"Thí sinh"}
          body={
            "tmedjtme djtme djtme djtme djtmedjtme djtme djtme djtme djtme djtme "
          }
        />
        <NumberColumn bigtitle={600} smalltitle={"thí sinh"} body={"djtme"} />
        <NumberColumn bigtitle={600} smalltitle={"thí sinh"} body={"djtme"} />
        <NumberColumn bigtitle={600} smalltitle={"thí sinh"} body={"djtme"} />
      </Grid>
    </div>
  );
}
