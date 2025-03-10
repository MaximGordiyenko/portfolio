"use client";
import { BiChevronsDown } from "react-icons/bi";
import { motion as m } from "framer-motion";
import Canvas from './Canvas';

export const Intro = ({ characters }) => {
  return (
    <article className="relative h-screen flex justify-center items-center flex-col gap-5">
      <Canvas/>
      <svg
        className="h-[10vw] max-h-[100px] min-h-[60px] max-w-[100vw] z-[1]"
        viewBox="0 0 290 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        {characters.map((character, index) => (
          <g key={index}>
            <m.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: index / 10, duration: 1 }}
              d={character}
              fill="none"
              stroke="#FFF"
              strokeWidth="3"
            />
            <m.path
              initial={{ fill: "#ffffff00" }}
              animate={{ fill: "#ffffff" }}
              transition={{ delay: 0.7 + index / 10, duration: 0.6 }}
              d={character}
            />
          </g>
        ))}
      </svg>
      <p className="tracking-[1rem] text-[0.5rem] mt-[-15px] font-bold text-gray-300">HORDIIENKO</p>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="text-3xl z-[1] overflow-hidden w-[100%]">
        <div className="animate-[right_3s_ease-in-out_forwards] flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="pink" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75 1.5 12l5.25 5.25m10.5 0L22.5 12l-5.25-5.25" />
          </svg>
          <span className="px-2 text-gray-400">React developer</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="pink" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
        
        </div>
      </m.div>
      <m.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer"
        href="#who"
        data-scroll-to>
        <BiChevronsDown
          size={56}
          className="animate-bounce w-20 h-20 text-pink-500 hover:text-sky-700"
        />
      </m.a>
    </article>
  );
};
