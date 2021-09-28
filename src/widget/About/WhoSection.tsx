import { Grid, Typography } from "@material-ui/core";
import React from "react";
import About1 from "../../static/About1.jpg";
import About2 from "../../static/About2.jpg";

export default function WhoAreWeSection() {
  return (
    <>
      <Grid container justifyContent="space-between" style={{ marginTop: 40 }}>
        <Grid
          item
          xs={5}
          style={{
            backgroundColor: "#E8ECF1",
            margin: 16,
            marginLeft: 0,
            borderRadius: 8,
          }}
        >
          <Typography
            variant="h2"
            align="left"
            color="secondary"
            style={{
              maxWidth: "70%",
              fontSize: 32,
              transform: "translateY(-24px)",
            }}
          >
            Chúng tôi là ai
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ marginBottom: 18 }}>
          <Typography align="left" variant="h5" color="textPrimary">
            Toán Mô Hình Hà Nội (Math Modelling Contest - MMC) là một tổ chức
            thúc đẩy phát triển ứng dụng của toán học được khởi xướng bởi VSMC
            (VIETNAM STUDENTS MATHEMATICS COMMUNITY) - một tổ chức học sinh,
            sinh viên được thành lập vào tháng 6 năm 2015 bởi một nhóm du học
            sinh có niềm đam mê toán học tại Mỹ và Singapore Mục đích chính là
            đưa đến nhiều góc nhìn khác về Toán học đến với học sinh Việt Nam và
            trải nghiệm, thực hành những kỹ năng mềm cần thiết có trong cuộc
            sống.
          </Typography>
        </Grid>
        <Grid
          item
          xs={8}
          style={{
            height: "auto",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${About1})`,
            minHeight: "300px",
            border: "12px solid white",
            borderLeft: "none",
          }}
        ></Grid>
        <Grid
          item
          xs={4}
          style={{
            height: "auto",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${About2})`,
            minHeight: "300px",
            border: "12px solid white",
            borderRight: "none",
          }}
        ></Grid>
      </Grid>
    </>
  );
}
