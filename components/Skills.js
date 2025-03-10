"use client";
import Image from "next/image";

export const Skills = ({ skills }) => {
  return (
    <article className="lg:min-h-[70vh] px-[5vw] pt-[40px] pb-[60px] flex flex-col items-center justify-center z-[4]">
      <h1
        data-scroll=""
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="text-center text-3xl lg:text-4xl pb-[8px] text-gray-300">
        Skills
      </h1>
      <p
        data-scroll=""
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-lg text-center mt-[8px] pb-[10px] text-gray-400">
        Technologies that I use to develop commercial product everyday
      </p>
      <nav className="grid justify-center grid-cols-8 md:grid-cols-6 lg:grid-cols-10 gap-y-[10px] md:gap-y-[20px]">
        {skills.map((skill) => (
          <a
            key={skill.id}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group">
            <Image
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={skill.image}
              alt={skill.image}
              width={50}
              height={50}
            />
            <p className="text-center text-stone-400 font-mono mt-2 mb-6 hover:text-sky-600">{skill.title}</p>
          </a>
        ))}
      </nav>
    </article>
  );
};
