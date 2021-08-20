import { AppBar, Grid, Typography, Container } from "@material-ui/core";
import MathLogo from "../static/mathmodellogo.png";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavItem from "../components/Nav/NavItem";

function Navbar() {
  const location = useLocation();
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      style={{
        zIndex: 1,
        color: "black",
        padding: 0,
        boxShadow: "none",
        background:
          location.pathname === "/" && scrollTop < 400
            ? "transparent"
            : "#1B4D82",
      }}
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            style={{ maxWidth: 1440, paddingTop: 12, paddingBottom: 12 }}
          >
            <Grid container justifyContent="space-between">
              <Grid item xs={4}>
                <Grid container>
                  <Grid>
                    <img src={MathLogo} height={60} alt={"logo"} />
                  </Grid>
                  <Grid style={{ marginLeft: 8 }}>
                    <hr />
                    <Typography
                      style={{
                        fontFamily: "MONTSERRAT",
                        color: "white",
                        fontWeight: 400,
                      }}
                      variant="h2"
                    >
                      MATHMODELING
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={8}>
                <hr />
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <NavItem link="" fontWeight={200} />
                  <NavItem link="about" fontWeight={200} />
                  <NavItem link="calendar" fontWeight={200} />
                  <NavItem link="event" fontWeight={200} />
                  <NavItem link="gallery" fontWeight={200} />
                  <NavItem link="courses" fontWeight={200} />
                  <NavItem link="faq" fontWeight={200} />
                  <NavItem link="blog" fontWeight={200} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}

export default Navbar;
