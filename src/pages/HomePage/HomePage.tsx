import React from "react";
import ContactForm from "../../components/Contact";
import withLayout from "../../layout/withLayout";
import FeatEvent from "../../widget/Home/FeatureEventSection";
import NumberSection from "../../widget/Home/NumberSection";
import ReviewSection from "../../widget/Home/ReviewSection";

function HomePage() {
  const detail =
    "function HomePage() {const detail = lorereturn (<div><FeatEvent name=/><NumberSection /><ContactForm /></div>);}function HomePage() {const detail = lorereturn (<div><FeatEvent name=/><NumberSection /><ContactForm /></div>);}function HomePage() {const detail = lorereturn (<div><FeatEvent name=/><NumberSection /><ContactForm /></div>);}";
  return (
    <div>
      <FeatEvent
        name="OFFLINE CONTEST"
        detail={detail}
        location="Hà Nội"
        time="Tháng 7/21"
      />
      <NumberSection />
      <ReviewSection />
      <ContactForm />
    </div>
  );
}

export default withLayout(HomePage);
