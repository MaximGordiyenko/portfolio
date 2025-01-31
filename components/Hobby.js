"use client";
import Image from "next/image";

export const Hobby = ({ hobby }) => {
  return (
    <div className="flex justify-center mx-[5vw] mt-16">
      <div className="w-full max-w-[1100px]">
        <h1 className="text-4xl text-center text-gray-300">Pet Projects</h1>
        <p className="mt-4 mb-5 text-gray-400 text-lg text-center">
          I am sure you will like some of my hobby projects
        </p>
        <div
          className="grid gap-2 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] justify-center">
          {hobby.map((project) => (
            <a href={project.link}
               target="_blank"
               rel="noopener noreferrer"
               className="flex gap-3 hover:bg-stone-900 p-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200"
               key={project.id}>
              <Image
                className="h-[40px] w-[80px] my-1 object-contain"
                src={project.icon.url}
                alt={project.icon.url}
                width={80}
                height={40}
              />
              <div>
                <h1 className="text-sky-600 hover:text-sky-400">{project.title}</h1>
                <p className="text-gray-400 hover:text-gray-300">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
