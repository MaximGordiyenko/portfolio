import Image from "next/image";

const Contact = ({social}) => {
  return (
    <div className="pb-20">
      <h1 className="text-center text-4xl mt-14 md:mt-28 mb-10">
        Get in touch
      </h1>
      <div
        data-scroll=""
        data-scroll-speed="1"
        className="flex justify-center mx-[5vw] mt-8">
        <div className="w-full max-w-[1100px] flex gap-10 flex-col md:flex-row">
          <div className="flex-1">
            <form
              method="POST"
              className="flex flex-col gap-2">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
                minLength={3}
              />
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@gmail.com"
                required
              />
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="I want to talk to you"
                required
              />
              <button
                className="mt-2 py-2 text-white rounded transition duration-600 flex justify-center items-center gap-[10px] bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-700 hover:to-sky-500 hover:font-bold">
                Send
              </button>
            </form>
          </div>
          <div className="flex-1">
            <h1 className="text-xl mb-3">Other places</h1>
            {social.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-center hover:bg-slate-900 p-2 transition duration-300">
                <Image
                  className="w-[30px] h-[30px] rounded-full"
                  src={item.icon}
                  alt={item.icon}
                  width='36px'
                  height='36px'
                />
                <h1 className="text-sky-600 hover:text-sky-400">{item.title}</h1>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;