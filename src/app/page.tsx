import '../app/globals.css';  // Ensure this path is correct

import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Project";

const webPage = () => {
  return(
    <div>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>
      


    </div>
  )
};

export default webPage;