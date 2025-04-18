"use client";
import { BiLinkExternal } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import ImageSlider from '@/components/slider/Slider';
import TextWithShowMore from '@/components/slider/TextWithShowMore';

export const Projects = ({ projects }) => {
  return (
    <article>
      <h1 className="text-center text-4xl pb-4 text-gray-300">
        Commercial Projects
      </h1>
      <p className="description text-lg text-center text-gray-400 sm:px-14">
        Commercial experience that special care of details, best practices, web standards, code quality
      </p>
      <section className="py-8">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={`item flex items-center gap-[20px] lg:gap-[60px] xl:min-h-[50vh] lg:min-h-[50vh] md:min-h-[60vh] md:py-8 max-sm:py-8
            lg:py-4 ${
              index % 2 === 1
                ? "flex-col lg:flex-row"
                : "flex-col lg:flex-row-reverse"
            } w-full px-[5vw]`}>
            <div className="w-full lg:flex-1">
              <ImageSlider projects={project}/>
            </div>
            <div className="item-info lg:flex-1">
              <h1 className="text-3xl text-sky-600">{project.company}</h1>
              <span className="text-sm text-slate-300 font-mono">{project.period.start} - {project.period.end}</span>
              <span className="text-slate-300">・</span>
              <i className="text-[15px] text-pink-400">{project.location}</i>
              <span className="text-slate-300">・</span>
              <i className="text-[14px] text-pink-300">{project.status}</i>
              <TextWithShowMore text={project.description}/>
              {project.technologies.map((technology, idx) =>
                  <span key={idx}
                        className="text-[15px] text-justify px-[4px] text-xs italic text-pink-300">
                {technology}
              </span>
              )}
              
              <div className="flex pt-[20px] gap-[20px]">
                <a href={project.site}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-700 hover:to-sky-500">
                  <BiLinkExternal size={25}/>
                  <span className="hover:text-gray-200">Official Site</span>
                </a>
                <a href={project.linkedIn}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-700 hover:to-sky-500">
                  <FaLinkedinIn size={25}/>
                  <span className="hover:text-gray-200">LinkedIn</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </article>
  );
};
