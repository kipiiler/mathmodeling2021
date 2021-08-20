import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";

export default function SubNav() {
  const location = useLocation();
  let imageUrlscontainArray: { [key: string]: any } = {
    faq: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/64e371ff-db9f-4b66-b34f-902e8c87865b/d5m49xe-88f608e6-a2e5-42b6-980e-149070b2b6fd.png",
    blog: "https://images.cloudflareapps.com/ij5s5higSzWcOB6vks5Q_background-1.jpeg",
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
