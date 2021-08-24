import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";

import FAQImage from "../static/FAQ.JPG";
import BLOGImage from "../static/Blog.jpg";

export default function SubNav() {
  const location = useLocation();
  let imageUrlscontainArray: { [key: string]: any } = {
    faq: FAQImage,
    blog: BLOGImage,
  };

  function imagechooser(location: any) {
    if (
      location.pathname.includes("/blog") ||
      location.pathname.includes("/faq")
    ) {
      console.log(location.pathname);
      let identifier = location.pathname.slice(1, location.pathname.length);
      return imageUrlscontainArray[identifier] || imageUrlscontainArray["blog"];
    } else return null;
  }

  return (
    <>
      {location.pathname !== "/" && (
        <Grid>
          <div style={{ height: 89 }}></div>
          <Container
            style={{
              backgroundImage: `url("${imagechooser(location) || ""}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                backgroundColor: imagechooser(location)
                  ? "rgb(41, 171, 226, .3)"
                  : "",
                margin: "0 -24px",
                padding: "0 24px",
              }}
            >
              <Grid
                container
                justifyContent="flex-start"
                style={{ paddingTop: 40 }}
              >
                <Typography
                  display="inline"
                  color={
                    imagechooser(location) ? "textSecondary" : "textPrimary"
                  }
                >
                  TRANG CHỦ
                </Typography>
                <Typography display="inline" style={{ marginLeft: 8 }}>
                  {" > "}
                </Typography>
                <Typography
                  display="inline"
                  color="error"
                  style={{ marginLeft: 8 }}
                >
                  {location.pathname.includes("/blog")
                    ? location.pathname.slice(1, 5).toUpperCase()
                    : location.pathname
                        .slice(1, location.pathname.length)
                        .toUpperCase()}
                </Typography>
                <Grid
                  container
                  justifyContent="center"
                  style={{
                    margin: "48px 0",
                    display: location.pathname === "/about" ? "none" : "",
                  }}
                >
                  <Typography
                    align="center"
                    style={{ fontSize: "32px" }}
                    color={
                      imagechooser(location) ? "textSecondary" : "secondary"
                    }
                  >
                    {location.pathname.includes("/blog")
                      ? location.pathname.slice(1, 5).toUpperCase()
                      : location.pathname
                          .slice(1, location.pathname.length)
                          .toUpperCase()}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Container>
        </Grid>
      )}
    </>
  );
}
