import React, { useEffect, useState } from "react";
import ContactForm from "../../components/Contact";
import withLayout from "../../layout/withLayout";
import FeatEvent from "../../widget/Home/FeatureEventSection";
import NumberSection from "../../widget/Home/NumberSection";
import ReviewSection from "../../widget/Home/ReviewSection";
import axios from "axios";
import { apiUrl } from "../../config/apiUrl.json";

interface IEvent {
  [key: string]: any;
}

function HomePage() {
  const [filteredEvent, setFilteredEvent] = useState<IEvent[]>();
  const [featuredEvent, setFeatureEvent] = useState<IEvent[]>();
  useEffect(() => {
    axios.get(`${apiUrl}/api/event`).then((res) => {
      setFilteredEvent(res.data.filter((e: any) => e.ended === false && e.isBigEvent === true));
    });
  }, []);

  useEffect(() => {
    if (filteredEvent) {
      setFeatureEvent(
        filteredEvent.sort(function compare(a: any, b: any) {
          var dateA: any = new Date(a.dateStart);
          var dateB: any = new Date(b.dateStart);
          return dateB - dateA;
        }))
    }
  }, [filteredEvent])

  return (
    <div>
      <FeatEvent
        name={featuredEvent && featuredEvent[0]?.name}
        detail={featuredEvent && featuredEvent[0]?.brief}
        location={(featuredEvent && featuredEvent[0]?.location) || "Hà Nội"}
        time={featuredEvent && featuredEvent[0]?.dateStart}
        link={featuredEvent && featuredEvent[0]?.signUpLink}
      />
      <NumberSection />
      <ReviewSection />
      <ContactForm />
    </div>
  );
}

export default withLayout(HomePage);
