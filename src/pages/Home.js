import React from "react";
import SectionOne from "../comps/SectionOne";
import SectionTwo from "../comps/SectionTwo";
import Testimonial from "../comps/Testimonial";
import Email from "../comps/Email";
import Footer from "../comps/Footer";

function Home() {
  return (
    <section className='home-grid grid'>
      <SectionOne />
      <SectionTwo />
      <Testimonial />
      <Email />
      <Footer />
    </section>
  );
}

export default Home;
