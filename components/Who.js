"use client";
import Image from "next/image";
import { calculateTotalPeriodsOfExperience, formatDuration } from '@/helper/calcDate';
import { useState } from 'react';

export const Who = ({ data }) => {
  const [showAll, setShowAll] = useState(false);
  
  const toggleShowMore = () => {
    setShowAll((prev) => !prev);
  };
  
  const items = Object.entries(calculateTotalPeriodsOfExperience(data?.projects));
  const visibleItems = showAll ? items : items.slice(0, 3);
  
  return (
    <article
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[9vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col lg:flex-row">
      <Image
        className="w-[300px] h-[300px] max-sm:w-[250px] rounded-full lg:flex-1"
        src="https://res.cloudinary.com/maxigord/image/upload/v1661180876/avatar_w7go3l.png"
        width={600}
        height={750}
        alt="who"
      />
      <header>
        <h1 className="title text-[40px] lg:flex-2">
          <span className="text-cyan-100">B</span>
          <span className="text-cyan-200">r</span>
          <span className="text-cyan-300">i</span>
          <span className="text-cyan-400">e</span>
          <span className="text-cyan-500">f</span>
          <span className="text-cyan-600">l</span>
          <span className="text-cyan-700">y</span> <span className="text-cyan-800">about <span
          className="underline decoration-pink-500">me</span> </span>
        </h1>
        <div className="text-lg text-gray-200" id="story">
          <p className="pb-4">{data.about[0]}</p>
          <p className="pb-4">{data.about[1]}</p>
          <p className="pb-4">{data.about[2]}</p>
          <ul>
            {visibleItems.map(([tech, months], idx) => (
              <li key={`${tech}-${idx}`}>
                {tech} <span className="text-pink-400 italic">{formatDuration(months)}</span>
              </li>
            ))}
          </ul>
          {items.length > 3 && (
            <button
              onClick={toggleShowMore}
              className="mb-2 text-blue-500 hover:text-blue-300">
              {showAll ? "Show Less" : "Show all stack..."}
            </button>
          )}
          <p>English: <span className="text-pink-400 italic">intermediate <span
            className="text-sky-600">(B1)</span></span></p>
        </div>
      </header>
    </article>
  );
};
