import React from "react";
import withLayout from "../../layout/withLayout";
import FounderSection from "../../widget/About/FounderSection";
import OurTeamSection from "../../widget/About/OurTeamSection";
import WhoAreWeSection from "../../widget/About/WhoSection";

function AboutPage() {
  return (
    <>
      <WhoAreWeSection />
      <FounderSection />
      <OurTeamSection />
    </>
  );
}

export default withLayout(AboutPage);
