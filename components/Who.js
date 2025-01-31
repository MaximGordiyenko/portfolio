"use client";
import Image from "next/image";
import { calcDate } from '@/helper/calcDate';

export const Who = ({ data }) => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row">
      <Image
        data-scroll=""
        data-scroll-speed="2"
        className="w-[300px] h-[300px] rounded-full"
        src="https://res.cloudinary.com/maxigord/image/upload/v1661180876/avatar_w7go3l.png"
        width={600}
        height={750}
        alt="who"
      />
      <div>
        <h1 data-scroll="" data-scroll-speed="0.5" className="title text-[40px]">
          <span className="text-cyan-100">B</span>
          <span className="text-cyan-200">r</span>
          <span className="text-cyan-300">i</span>
          <span className="text-cyan-400">e</span>
          <span className="text-cyan-500">f</span>
          <span className="text-cyan-600">l</span>
          <span className="text-cyan-700">y</span> <span className="text-cyan-800">about <span
          className="underline decoration-pink-500">me</span> </span>
        </h1>
        <div data-scroll="" className="text-lg text-gray-200" id="story">
          <p className="pb-4">{data.about[0]}</p>
          <p className="pb-4">{data.about[1]}</p>
          <p className="pb-4">{data.about[2]}</p>
          <ul>
            <li>JavaScript <span className="text-sky-600">|</span> React <span
              className="text-sky-600">|</span> React-Hooks: <span className="text-pink-400 italic">
              {calcDate("06/01/2019", Date.now())}
            </span>
            </li>
            <li>Redux <span className="text-sky-600">|</span> Styled-Components: <span className="text-pink-400 italic">
              {calcDate("10/01/2019", Date.now())}
            </span>
            </li>
            <li>NextJS <span className="text-sky-600">|</span> React-Testing-Library: <span
              className="text-pink-400 italic">
              {calcDate("01/03/2022", Date.now())}
            </span>
            </li>
            <li>NodeJS <span className="text-sky-600">|</span> MongoDB <span
              className="text-sky-600">|</span> TypeScript: <span className="text-pink-400 italic">
              {calcDate("09/01/2019", "01/01/2021")}
            </span>
            </li>
            <li>English: <span className="text-pink-400 italic">intermediate <span className="text-sky-600">(B1)</span></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
