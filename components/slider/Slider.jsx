import { useState } from "react";
import Image from "next/image";

const ProjectsSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.images.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.images.length) % projects.images.length);
  };
  
  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <figure
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {projects.images.map((image) => (
            <div
              key={image.id}
              className="min-w-full flex-shrink-0"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
              <div className="w-full h-[340px] relative overflow-hidden rounded-[12px]">
                <Image
                  className="rounded-[12px] transition-transform duration-300 ease-in-out"
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="100%"
                  style={{
                    objectFit: "contain",
                    transform: hovered ? "scale(1.8)" : "scale(1)",
                  }}
                />
              </div>
            </div>
          ))}
        </figure>
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-sky-600/75 hover:bg-sky-600/100 text-white p-2 rounded-full z-10 hover:bg-sky-700 cursor-pointer">
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-sky-600/75 hover:bg-sky-600/100 text-white p-2 rounded-full z-10 hover:bg-sky-700 cursor-pointer">
        &gt;
      </button>
    </div>
  );
};

export default ProjectsSlider;
