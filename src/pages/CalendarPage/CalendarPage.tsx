import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CalendarPost from "../../components/CalendarPost";
import CountDown from "../../components/Countdown";
import withLayout from "../../layout/withLayout";
import { apiUrl } from "../../config/apiUrl.json";

interface IEvent {
  [key: string]: any;
}

function CalendarPage() {
  const [eventList, setEventList] = useState<IEvent[]>();

  useEffect(() => {
    axios.get(`${apiUrl}/api/event`).then((res) => {
      if (res.data) {
        setEventList(res.data);
      }
    });
  }, []);

  return (
    <div>
      <CountDown />
      <Grid container justifyContent="space-between">
        {eventList?.map((event) => (
          <CalendarPost
            key={event.id}
            body={event.brief || "FFFF"}
            title={event.name}
            image={
              `${apiUrl}/Images/${event.image}` ||
              "https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png"
            }
            month={new Date(event.dateStart).getMonth()}
          />
        ))}
      </Grid>
    </div>
  );
}

export default withLayout(CalendarPage);
