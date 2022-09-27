import Contact from "../components/Contact";
import Cursor from "../components/Cursor";
import Intro from "../components/Intro";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Hobby from "../components/Hobby";
import Who from "../components/Who";
import { useRef } from "react";
import { data } from '../data/data';

const Index = () => {
  const containerRef = useRef(null);
  
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      }}
      watch={[]}
      containerRef={containerRef}>
      <Cursor/>
      <div data-scroll-container="" ref={containerRef}>
        <Intro characters={data.characters}/>
        <Who data={data}/>
        <Skills skills={data.skills}/>
        <Projects projects={data.projects}/>
        <Hobby hobby={data.hobby}/>
        <Contact social={data.social} data={data}/>
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Index;