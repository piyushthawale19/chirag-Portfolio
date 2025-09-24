import React from "react";

// Import Images
import cppIcon from "../assets/Image/cpp.webp";
import typescriptIcon from "../assets/Image/javascript.webp"; // you don’t have typescript.webp, using javascript.webp
import tailwindIcon from "../assets/Image/tailwind.webp";
import reactIcon from "../assets/Image/react.webp";
import nodejsIcon from "../assets/Image/nodejs.webp";
import javaIcon from "../assets/Image/java.webp";
import htmlIcon from "../assets/Image/html.webp";
import cssIcon from "../assets/Image/css.webp";
import githubIcon from "../assets/Image/github.webp";
import headerBg from "../assets/Image/header.webp";

const Home = () => {
  return (
    <div className="m-0 p-0 min-h-screen">
      {/* Background Section */}
      <div
        className="flex justify-center items-center h-screen relative overflow-hidden object-contain bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        {/* Floating Icons */}
        <div>
          <img
            src={cppIcon}
            alt="C++"
            className="float2 w-14 sm:w-16 md:w-[110px] absolute top-[75%] right-[15%]"
          />
          <img
            src={typescriptIcon}
            alt="TypeScript"
            className="float w-12 sm:w-14 md:w-[75px] absolute top-[65%] left-[30%]"
          />
          <img
            src={tailwindIcon}
            alt="Tailwind"
            className="float w-14 sm:w-16 md:w-[85px] absolute top-[40%] right-[28%]"
          />
          <img
            src={reactIcon}
            alt="React"
            className="float2 w-16 sm:w-20 md:w-[110px] absolute top-[15%] right-[20%]"
          />
          <img
            src={nodejsIcon}
            alt="Node.js"
            className="float w-14 sm:w-16 md:w-[85px] absolute top-[40%] left-[25%]"
          />
          <img
            src={typescriptIcon}
            alt="JavaScript"
            className="float w-12 sm:w-14 md:w-[75px] absolute top-[65%] right-[30%]"
          />
          <img
            src={javaIcon}
            alt="Java"
            className="float2 w-16 sm:w-20 md:w-[100px] absolute top-[30%] left-[8%]"
          />
          <img
            src={htmlIcon}
            alt="HTML"
            className="float w-16 sm:w-20 md:w-[100px] absolute top-[33%] right-[8%]"
          />
          <img
            src={cssIcon}
            alt="CSS"
            className="float w-16 sm:w-20 md:w-[110px] absolute top-[75%] left-[12%]"
          />
          <img
            src={githubIcon}
            alt="GitHub"
            className="float2 w-16 sm:w-20 md:w-[110px] absolute top-[15%] left-[20%]"
          />
        </div>

        {/* Spline Robot */}
        <div className="flex justify-center items-center aspect-[7/6] rounded-xl overflow-hidden">
          <iframe
            src="https://my.spline.design/genkubgreetingrobot-108oWNGOxBIGtPOKqo0ZPbcw/"
            frameBorder="0"
            allow="none"
            className="w-full h-full md:absolute md:top[50%] md:left-[6%]"
          ></iframe>
        </div>
      </div>

      {/* Navigation placeholder */}
      <nav className="m-[75px] shadow-transparent"></nav>
    </div>
  );
};

export default Home;
