import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "./Hero.jsx";
import ProblemSection from "./ProblemSection.jsx";
import Solution from "./Solution.jsx";
import InternCourse from "./InternCourse.jsx";
import Skill from "./Skill.jsx";
import CertificationSection from "./CertificationSection.jsx";
import DemoClasses from "./DemoClasses.jsx";
import Faq from "./Faq.jsx";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <ProblemSection />
      <Solution />
      <InternCourse />
      <Skill />
      <CertificationSection />
      <DemoClasses />
      <Faq />
    </>
  );
};

export default Home;
