import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";

import ScheduleIcon from "@material-ui/icons/Schedule";
import PinDropIcon from "@material-ui/icons/PinDrop";

export default function FeatEvent({ detail, time, location, name }: any) {
  return (
    <>
      <Grid container style={{ marginTop: 60 }}>
        <Grid item xs={6} style={{ paddingRight: 48 }}>
          <Grid container>
            <Grid
              item
              xs={8}
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
                  maxWidth: "60%",
                  fontSize: 40,
                  transform: "translateY(-24px)",
                }}
              >
                {name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align="left" color="textPrimary">
                {detail}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                backgroundColor: "#E8ECF1",
                marginTop: 16,
                marginBottom: 16,
                padding: "20px 0",
                borderRadius: 8,
              }}
            >
              <Grid container justifyContent="center">
                <Grid item xs={4}>
                  <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={2}>
                      <PinDropIcon style={{ color: "#1B4D82" }} />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography>{time}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={2}>
                      <ScheduleIcon style={{ color: "#1B4D82" }} />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography>{location}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Button
                  variant="contained"
                  style={{
                    boxShadow: "none",
                    paddingRight: 32,
                    paddingLeft: 32,
                    background: "#1B4D82",
                    marginTop: 8,
                    color: "white",
                  }}
                >
                  <Typography>Đăng kí</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid
              item
              xs={6}
              style={{
                border: "12px solid white",
                height: "200px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("data:image/png;base64,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")`,
              }}
            ></Grid>
            <Grid
              item
              xs={6}
              style={{
                height: "200px",
                border: "12px solid white",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAACjCAMAAADciXncAAAAw1BMVEUoLDRh2vtj4P9i3v9k4v8lHyZi3f8mJCsjEhcoKjInJy4lHiQkGyElIScjFRonJi0gAAAkGB5Jlq0jJzBOorsvRE81VmQiDhNe0O9TscxEhZlHj6UrNT5Cf5NAeo0eIyxaxuRRrMY3X24VGyWys7VXvNk1WGY9cYMtPEYxS1dLm7NFip9Zw+BPp8AuP0o6aHl4en0ADRsAAAWHiYyVlphdX2ROUFWAgoVwcXU6PUTFxsfg4OHS0tOpqqwAABYAAA9DRkxEx+wLAAAHtklEQVR4nO3b6VLjShIGUNWi0i5ZQtZuebexMBgu9EL3MHfe/6kmSzY2Mbjv0L+A6O/Q4Y1oQpGRVZVZJRsGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJxYQeC+9zV8NlG8q6uhjbj9DjMrpOByufHf+0o+EWsllZBcKDmy3/taPg0nYopfGZtryWSXv/fVfBZ+KnhlO649Y0omyLY3cQwuJgP9KhhS2FrvvS/oUzCvuNxZ/UtrIxgfPq+kUWB6XuC835V9ZPZWFc+zmbeTqtBj1AnCeDVK0m50EyJurzmGFOmx4rBTLhM/Co1qyWlVFVSPlA7C9oq1ls8DVAsLxZtZybmigFERR5ErUMW94iVCGqdsslacMa6UZNPRxo2DbClkHbzj9X1McSmKU5Hm5CtGeLkL474xjQaFmoTvd3kflF2IZfz8xmtKyRQrjDB6/oiqORGf/69/JNfy/DgeMJEOTCtydKJVQigxUXxz6uNpBHOM0AMr9jdtkpbLpVKTrm5Xhm03W+qplpeXUpWnMUm5ppBrvSBsS9ZXFkIwpqjA4LIo9djcDVx7ScvocX0It2KCLkvLR0zqUkyyYjKhyV9veNAjxW9bZ7k9k6I+9lWBENcoPUhYSsVZOcpoVOZDydd5k7WKKV2cCcnSTSGK5/TS5dza+sc/92eIUynYyKPKgoahm0neBuZloUSRra8L2QeOyeywAtBwFQgarZQ3Uk2s5xHobiQf2RmVtUvPsvx8U0+kHqrLja2LD/dGiikWA5qoRpxnx/ShGIpRxplM834BcE17mBSCURRXuWvE10Jm0a//2B8jqLi8PC6RTsNFKZi8OvUHrjdI9eIgKd8uudhie5dEOz2THd8GghbP/YGBZ/thrBMryiSb6AmuK5WcIdU0j4nJKX/ygub+lqpax0sKzpYrXWbYTJTGVFIhJ0qkWs9LuLx6nuGjSxqLIx00g2Kmx2Xl9y09C+3NUlH0LORaz6S5fmX2Lx2roIZAnxrYS8F6chUZ5hUtAm7eUVcq2AYnCZq1kkxt+qkt17HiVl+37YNGRUfcV3GVvaMSpeSKr7FTpMUjqVRGIzHspNIlrWsE9SHVCK0MlhBpRPHcDGrq6Cs0oppNseBrO9CHKxnXS6qZHKPGac6zJ2K7FXLkG+GOirkKha5mV5RCaaCzyROi8wyrPY5Q3YP6U6WUmOr108uoMtmZ733FH0K8o5leMV75Oq1sw3Gec03q/Q6PBqw47Hyb1DqISxxUaeaQVk9aPk29xU2ZZB6STRR6ycz1gDUOO7r+WqolyrZelOvhyNrBmnNd/8etktQOLPWBVTiiee9070I+FWgR9rwrrgqqK4q2n9go29w2ucrsQ9CYuDrOZbpZnWJrUrNo3h+MGFeCqclAD0bH8kz9nFf6oGofyj0qgQtUH4ae73XFEQSJokZKdMP8eB9MntDwzNiL+xj0hhFD1Ax9a8L+9NiPap1Ycls1tkeZ5ti6a18N2IsxGXlMbdEg9OcBvOonLscbFJRtisttndm2MeHUepp2IcpDaWvZwwkVvDgU7Xc1RHQYk34nxJRJKuAkKwultmZOkRRlbgWmb/s76kXlEgOU+OqYS/rsQCSDWaq3inStWyynXcXEcrYe1dfUVwklU4xP4q4kP425fCKYZ/mDmW7l92fL+sRF9kd9gvMyQ9C0YMTl6WaOoKUYhmFCnVMxWyflhHFdsHEuOZtct0aMr2/09D0vL+6BjKl221HJK689yzLjMIyGUqSr1aYJQ99CC3qgo/bicNiuBNNtwux5zo/0ManvugjYS/p473mERn683tKMxurwGEjr0JzCS7RsqnLgm54fhrOUUV3LRDU4/d6rhcTm0CvUWYoiret0KWih5KIrlGheTHSlYNgbesVpikOJIbicVFa+li+PPkN2KufgxDXrQt8bX0yrG5s693zZHxPsRVTOVWihzvFsq2kC299vdjiNYnxzWA7iVMgbTGu/8PJrK8GOKttLa/+x0GcJ8AZhLRUb9qcGlGq4QfKN8pQqkDb381bi/qu3yzvJeNGV8sX3HeH/stf6HIGKkRlOjX9D4NYTxcobVB2/xfFCP8TOEAAAAAAAAMAHMjYuxvppfPHqF8arz2CveZh/uZ3P5w+3X+dzR8eKfsZzZ3z3ML/79hVhO8dpnv76cv998bh4+PqwMJzxt7uH8e39orm/XxiLH4jaWY7x8+nHt3/d/ni6v324WMzH919+fv/29O/Fj78Wi7sFonbWPtd+PH5f3N8+PT49Xjg/v/68WIwXi78X9Iio/cLt+OuX74v/3H55vH+a62S7u7/7tnBu57fG4uERB8nnjQ3nYjy/GF8447lBudUvB7QaGGNnPkbQ3gIDEgAA4K3+97sEQWCePkHhcZ41unQMM6BgOUEUmEZwlaQNvYkC1w2CDW5cOCuobxwjqeKkNrpd3RleN8iqddesu82qm5Ut7vw7h6Lm1VW5WU9XdVat2rBLls2yTWfrLh3M6ve+vA8qqIfW1WrXtt3satVmrd0N0iZtZtNhl/rrusHMdk40S5Kmbt26Hc6G2TBzd8Zwtkua9Wg27LIhRuhZQZ0kXf9PP+x/ksN7/YSb/84KzH+CoAEAAAAAAAAAAAAAAAAAAAAAwAf1X6U+id0y17miAAAAAElFTkSuQmCC")`,
              }}
            ></Grid>
            <Grid
              item
              xs={6}
              style={{
                height: "200px",
                backgroundRepeat: "no-repeat",
                border: "12px solid white",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("data:image/png;base64,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")`,
              }}
            ></Grid>
            <Grid
              item
              xs={6}
              style={{
                height: "200px",
                backgroundRepeat: "no-repeat",
                border: "12px solid white",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("data:image/png;base64,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")`,
              }}
            ></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
