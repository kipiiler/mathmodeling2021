import { Grid } from "@material-ui/core";
import React from "react";
import CalendarPost from "../../components/CalendarPost";
import CountDown from "../../components/Countdown";
import withLayout from "../../layout/withLayout";

function CalendarPage() {
  return (
    <div>
      <CountDown time="Jan 5, 2022 15:37:25" name="OFFLINE CONTEST" />
      <Grid container justifyContent="space-between">
        <CalendarPost
          body="fukk fuk fukk fukk fukk"
          title="aaaaa"
          image="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png"
          month={1}
        />
        <CalendarPost
          body="fukk fuk fukk fukk fukk"
          title="aaaaa"
          image="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png"
          month={1}
        />
        <CalendarPost
          body="fukk fuk fukk fukk fukk"
          title="aaaaa"
          image="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png"
          month={1}
        />
        <CalendarPost
          body="fukk fuk fukk fukk fukk"
          title="aaaaa"
          image="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png"
          month={1}
        />
        <CalendarPost
          body="fukk fuk fukk fukk fukk"
          title="aaaaa"
          image="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png"
          month={1}
        />
        <CalendarPost
          body="fukk fuk fukk fukk fukk"
          title="aaaaa"
          image="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png"
          month={1}
        />
        <CalendarPost
          body="fukk fuk fukk fukk fukk"
          title="aaaaa"
          image="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png"
          month={1}
        />
        <CalendarPost
          body="fukk fuk fukk fukk fukk"
          title="aaaaa"
          image="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png"
          month={1}
        />
        <CalendarPost
          body="fukk fuk fukk fukk fukk"
          title="aaaaa"
          image="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png"
          month={1}
        />
      </Grid>
    </div>
  );
}

export default withLayout(CalendarPage);
