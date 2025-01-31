import { useState } from "react";
import Image from "next/image";

const ProjectsSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.images.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.images.length) % projects.images.length);
  };
  
  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {projects.images.map((image) => (
            <div key={image.id} className="min-w-full flex-shrink-0">
              <div className="w-full h-[340px] relative">
                <Image
                  className="object-cover rounded-[12px]"
                  src={image.url}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-sky-700 cursor-pointer">
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-sky-700 cursor-pointer">
        &gt;
      </button>
    </div>
  );
};

export default ProjectsSlider;
