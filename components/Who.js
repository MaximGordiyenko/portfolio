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
        src="/avatar.png"
        width='550px'
        height='700px'
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
          <p>My name is Maxim Gordiyenko. I'm a frontend developer since 2019 living in Kiev, Ukraine.</p>
          <p>Since then, I have made a lot of projects like CRM in <span className='italic'>
            EPAM <sup className="text-gray-400 not-italic">®</sup> System Ukraine</span>, thereafter made marketplace for
             sale soil, timber in Norway company for local market.
             Besides the e-commerce coding, I also love writing <a
              className="underline underline-offset-2 text-slate-600 hover:text-sky-300"
              href="#" target="_blank" rel="noopener noreferrer">
              blog </a> about faced up issues and the ways to solve it.
          </p>
          <p>Some period of life worked on UpWork so that find work-life balance like a <span
            className="text-gray-100">Lagom</span> inside of <span className="text-gray-100">Hygge</span>.</p>
          <p>In my spare time, learning new tech stacks, at least micro-services and algorithms.</p>
          <p>My hobby is rock climbing, cos that’s my technique from burnout, moreover, I love salsa.</p>
        </div>
      </div>
    </div>
  );
};

export default Who;