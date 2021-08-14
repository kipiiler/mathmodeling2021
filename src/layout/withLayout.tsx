import { Container } from "@material-ui/core";
import React, { ReactElement } from "react";
import HeroSection from "../widget/Home/HeroSection";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SubNav from "./Subnav";

interface Props {}

export default function withLayout<P extends object>(
  Comp: React.ComponentType<P>
): (props: Props) => JSX.Element {
  return (props): ReactElement => {
    return (
      <>
        <Navbar />
        <SubNav />
        <HeroSection />
        <Container>
          <Comp {...(props as P)} />
        </Container>
        <Footer />
      </>
    );
  };
}
