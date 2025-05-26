import { useState } from "react";
import Image from "next/image";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from 'react-icons/rx';
import { TbZoom } from 'react-icons/tb';

const ProjectsSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [origin, setOrigin] = useState("center center");
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.images.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.images.length) % projects.images.length);
  };
  
  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };
  
  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <figure
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.images.map((image) => (
            <div
              key={image.id}
              className="min-w-full flex-shrink-0"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onMouseMove={handleMouseMove}>
              <div className="w-full h-[340px] relative overflow-hidden rounded-[12px]">
                <div
                  className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-200 ${
                    hovered ? "opacity-100" : "opacity-0"
                  }`}>
                  <TbZoom className="w-15 h-15 z-10 text-sky-700/60"/>
                </div>
                <Image
                  className="rounded-[12px] transition-transform duration-300 ease-in-out"
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="100%"
                  style={{
                    objectFit: "contain",
                    transform: hovered ? "scale(2)" : "scale(1)",
                    transformOrigin: origin,
                  }}
                />
              </div>
            </div>
          ))}
        </figure>
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600/5 hover:bg-gray-600/20 text-white p-10 h-full z-10 cursor-pointer">
        <RxDoubleArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600/5 hover:bg-gray-600/20 text-white p-10 h-full z-10 cursor-pointer">
        <RxDoubleArrowRight />
      </button>
    </div>
  );
};

export default ProjectsSlider;
