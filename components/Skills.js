import Image from "next/image";

const Skills = ({ skills }) => {
  return (
    <div className="lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1
        data-scroll=""
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="text-center text-3xl lg:text-4xl">
        Skills - Tools - Knowledge
      </h1>
      <p
        data-scroll=""
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-lg text-center my-[30px] text-gray-400">
        Technologies and languages that I use to make my product everyday
      </p>
      <div className="grid justify-center grid-cols-4 md:grid-cols-6 gap-y-[10px] md:gap-y-[20px]">
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
              width="50px"
              height="50px"
            />
            <p className="text-center text-stone-400 font-mono mt-2 mb-6 hover:text-sky-600">{skill.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;