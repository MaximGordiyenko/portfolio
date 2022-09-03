import { Fragment } from "react";

import { BiChevronsDown } from "react-icons/bi";
import Canvas from "./Canvas";
import { m } from "framer-motion";

const Intro = ({characters}) => {
  return (
    <div className="relative h-screen flex justify-center items-center flex-col gap-5">
      <Canvas/>
      <svg
        className="h-[10vw] max-h-[100px] min-h-[60px] max-w-[100vw] z-[1]"
        viewBox="0 0 290 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        {characters.map((character, index) => (
          <Fragment key={character}>
            <m.path
              initial={{pathLength: 0}}
              animate={{pathLength: 1}}
              transition={{delay: index / 10, duration: 1}}
              d={character}
              fill="none"
              stroke="#FFF"
              strokeWidth="3">
            </m.path>
            <m.path
              initial={{fill: "#ffffff00"}}
              animate={{fill: "#ffffff"}}
              transition={{delay: 0.7 + index / 10, duration: 0.6}}
              fill="none"
              d={character}
            ></m.path>
          </Fragment>
        ))}
      </svg>
      <p className="tracking-[1rem] text-[0.5rem] mt-[-15px]">GORDIYENKO</p>
      <m.d
        data-scroll
        data-scroll-speed="1"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.4, delay: 1.4}}
        className="text-3xl text-center z-[1] overflow-hidden w-[100%]">
        <div className="animate-[right_3s_ease-in-out_forwards] ml-[50%] italic sm:text-[0.7rem] xl:text-[1.8rem]">
          I am a frontend
        </div>
        <div className="animate-[left_3s_ease-in-out_forwards] ml-[50%] italic sm:text-[0.7rem] xl:text-[1.8rem]">
          backend developer
        </div>
      </m.d>
      <div className="flex item-center justify-content">
        <div className="relative w-[15px] h-[15px] bg-pink-600 rotate-45">
          <div className="absolute w-[100%] h-[100%] bg-pink-600 rounded-[50%] left-[-50%]"></div>
          <div className="absolute w-[100%] h-[100%] bg-pink-600 rounded-[50%] top-[-50%]"></div>
        </div>
      </div>
      <m.a
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.4, delay: 1.4}}
        className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer"
        href="#who"
        data-scroll-to>
        <BiChevronsDown size={56} className="animate-bounce w-20 h-20 hover:text-sky-700"/>
      </m.a>
    </div>
  );
};

export default Intro;