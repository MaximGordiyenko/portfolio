import Image from "next/image";

const Who = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row">
      <Image
        data-scroll=""
        data-scroll-speed="2"
        className="w-[225px] h-[225px] rounded-full"
        src="https://res.cloudinary.com/maxigord/image/upload/v1661180876/avatar_w7go3l.png"
        width="550px"
        height="700px"
        alt="who"
      />
      <div>
        <h1 data-scroll="" data-scroll-speed="0.5" className="title text-[40px]">
          <span className="text-cyan-200">W</span>
          <span className="text-cyan-300">h</span>
          <span className="text-cyan-400">o</span> <span className="text-cyan-500">a</span>
          <span className="text-cyan-600">m</span> <span className="text-cyan-700">I</span> <span
          className="text-cyan-800">?!</span>
        </h1>
        <div data-scroll="" className="text-lg text-gray-200" id="story">
          <p>My name is Maxim Gordiyenko. I am a frontend developer since 2019 living in Kiev, Ukraine.</p>
          <p>Since then, I have made a lot of projects like CRM in <span className="italic">
            EPAM <sup className="text-gray-400 not-italic">®</sup> System Ukraine</span>, thereafter made marketplace
             for sale soil, timber in Norway company for local market.
          </p>
          <p>Some period of life worked on UpWork so that find work-life balance like a <span
            className="italic">Lagom</span> inside of <span className="italic">Hygge</span>.</p>
          <p>And last but not least is communication with the team quite important skill if hit a problem I will
             always turn to colleagues when google is no longer helping me.</p>
          Besides the e-commerce coding, I also love writing <a
          className="underline underline-offset-2 text-slate-600 hover:text-sky-300"
          href="#" target="_blank" rel="noopener noreferrer">
          blog </a> about faced up issues and the ways to solve it.
          
          In my spare time, learning new tech stacks, time to time back to Udemy.com in order to refresh knowledge of
          JavaScript:
          "Understanding the Weird Parts", check new ability of React or start off new course "Microservices" and read
          about algorithms.
          <p>My hobby is rock climbing, cos that is my technique from burnout, moreover, I love salsa.</p>
        </div>
      </div>
    </div>
  );
};

export default Who;