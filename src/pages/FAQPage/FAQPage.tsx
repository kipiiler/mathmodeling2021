import { Grid } from "@material-ui/core";
import React from "react";
import ContactForm from "../../components/Contact";
import withLayout from "../../layout/withLayout";
import FAQSection from "../../widget/FAQ/FAQSection";

function FAQPage() {
  return (
    <>
      <FAQSection />
      <Grid container justifyContent="center">
        <Grid item xs={9}>
          <ContactForm />
        </Grid>
      </Grid>
    </>
  );
}

export default withLayout(FAQPage);
