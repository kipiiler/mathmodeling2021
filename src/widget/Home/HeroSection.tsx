import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";
import HeroImage from "../../static/heroImage.jpg";

export default function HeroSection() {
  const location = useLocation();
  return (
    <div style={{ display: location.pathname === "/" ? "" : "none" }}>
      <Grid
        container
        style={{
          height: "50vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        <div
          style={{
            backgroundColor: "rgb(0,66,113, .5)",
            height: "auto",
            width: "100%",
            paddingTop: "15vh",
          }}
        >
          <Container>
            <Grid container>
              <Grid item xs={5}>
                <Typography
                  align="left"
                  style={{ fontSize: 48, fontWeight: 500, color: "#ACE4FF" }}
                >
                  TOÁN MÔ HÌNH HÀ NỘI
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  align="left"
                  color="textSecondary"
                  variant="h3"
                  style={{ fontWeight: 200 }}
                >
                  Math modeling contest MMC
                </Typography>
              </Grid>
              <Grid container justifyContent="space-between">
                <Grid item xs={6}>
                  <Grid
                    container
                    style={{ height: "100%" }}
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Button variant="contained" color="primary">
                      <Typography>Tìm hiểu thêm</Typography>
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <div
                    style={{
                      padding: "40px 20px",
                      border: "1px solid white",
                      borderRadius: 20,
                    }}
                  >
                    <Typography variant="h3" color="textSecondary">
                      Không có lời giải tốt nhất, chỉ có lời giải tốt hơn
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Grid>
    </div>
  );
}
