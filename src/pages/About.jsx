import React from "react";
import chirag from "../assets/Image/Chirag3.jpg";

const About = () => {
  return (
    <section className="p-5 m-6 sm:m-8 md:m-12">
      {/* Section Title */}
      <div className="flex justify-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl mb-10">
          About
        </h1>
      </div>

      <div className="h-auto md:h-dvh flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
        {/* Text Section */}
        <div className="w-full md:w-[750px] p-3 sm:p-5 text-justify">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-3">
            Hi, I’m Chirag ✋
          </h1>

          <p className="font-serif text-base sm:text-lg md:text-2xl mb-5">
            A passionate photographer and tech enthusiast who loves blending
            creativity with technology...
          </p>
          <p className="font-serif text-base sm:text-lg md:text-2xl mb-5">
            When I’m not behind the lens, you’ll find me building digital
            experiences...
          </p>
          <p className="font-serif text-base sm:text-lg md:text-2xl mb-5">
            Through my portfolio, I aim to share not only my projects but also
            the way I see the world...
          </p>
        </div>

        {/* Iframe Section */}
        <div className="h-[550px] w-[800px] aspect-[16/9] rounded-xl overflow-hidden">
          <img
            src={chirag}
            alt="chirag"
            className="w-full h-full object-contain "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
