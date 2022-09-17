import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const Projects = ({ projects }) => {
  return (
    <>
      <h1 className="text-center text-4xl mb-10 md:mb-20">Projects</h1>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 ${
            index % 2 === 1
              ? "flex-col lg:flex-row"
              : "flex-col lg:flex-row-reverse"
          }`}>
          <div data-scroll="" data-scroll-speed="3" className="lg:flex-1">
            <div className="border-[#888] border-2 rounded-[20px] overflow-hidden shadow-2xl">
              <div className="border-black border-[8px]">
                <Image
                  className="w-full rounded-[12px]"
                  src={project.image.url}
                  alt={project.image.url}
                  width='600px'
                  height='340px'
                />
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-3xl text-sky-600">{project.title}</h1>
            <p className="text-[20px] text-justify my-3 text-gray-400">
              {project.description}
            </p>
            
            <div className="flex gap-[5px]">
              {project.technologies.map((tech) => (
                <Image
                  key={tech}
                  className="w-[30px] h-[30px]"
                  src={tech}
                  alt={tech}
                  width='40px'
                  height='40px'
                />
              ))}
            </div>
            
            <div className="flex mt-[25px] gap-[20px]">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-700 hover:to-sky-500">
                <BiLinkExternal size={25}/>
                <span className='hover:text-gray-200'>Official Site</span>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1b222b] hover:bg-[#191e25]">
                <FaGithub size={25}/>
                <span className='hover:text-gray-300'> View Github</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;