import React from "react";
import ContactForm from "../../components/Contact";
import CountDown from "../../components/Countdown";
import withLayout from "../../layout/withLayout";
import DetailEventSection from "../../widget/Event/DetailSection";

function EventPage() {
  return (
    <div>
      <DetailEventSection />
      <CountDown time="Jan 5, 2022 15:37:25" name="OFFLINE CONTEST" />
      <ContactForm />
    </div>
  );
}

export default withLayout(EventPage);
