import Clients from "../../components/Clients";
import SectionHeader from "../../components/SectionHeader";
import Separator from "../../components/Separator";
import AboutSection from "../../components/sections/AboutSection";
import MessageSection from "../../components/sections/MessageSection";
import PromoSection from "../../components/sections/PromoSection";
// import TestimonialsSection from "../../components/sections/TestimonialsSection";
// import Experts from "./Experts";
import OtherServices from "../Services/OtherServices";

const About = () => {
  return (
    <>
      <section className="h-[70vh] bg-center bg-fill bg-promo-pattern">
        <SectionHeader
          isCenter={false}
          title="Royalty GT"
          whiteText="About"
          yellowText="Us"
        />
      </section>
      <Separator />
      <AboutSection />
      <PromoSection />
      {/* <TestimonialsSection /> */}
      <Separator />
      <OtherServices />

      {/* <Experts /> */}
      <MessageSection />
      <Clients />
    </>
  );
};

export default About;
