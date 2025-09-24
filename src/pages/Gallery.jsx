import React from "react";

// Import Images
import Palkhi1 from "../assets/Image/Palkhi1.jpg";
import Palkhi2 from "../assets/Image/Palkhi2.jpg";
import Palkhi3 from "../assets/Image/Palkhi3.jpg";
import Palkhi4 from "../assets/Image/Palkhi4.jpg";
import Palkhi5 from "../assets/Image/Palkhi5.jpg";
import Palkhi6 from "../assets/Image/Palkhi6.jpg";
import Palkhi7 from "../assets/Image/Palkhi7.jpg";
import Palkhi8 from "../assets/Image/Palkhi8.jpg";
import Palkhi9 from "../assets/Image/Palkhi9.jpg";
import Palkhi10 from "../assets/Image/Palkhi10.jpg";
import Palkhi11 from "../assets/Image/Palkhi11.jpg";
import Chirag from "../assets/Image/Chirag.jpg";
import Mandir1 from "../assets/Image/Mandir1.jpg";
import Mandir2 from "../assets/Image/mandir2.jpg";
import Mandir3 from "../assets/Image/mandir3.jpg";
import Mandir4 from "../assets/Image/mandir4.jpg";
import Mandir5 from "../assets/Image/Mandir5.jpg";
import Mandir6 from "../assets/Image/mandir6.jpg";
import Parade from "../assets/Image/Parade.jpg";
import NC2 from "../assets/Image/NC2.jpg";
import NC3 from "../assets/Image/NC3.jpg";
import Classic1 from "../assets/Image/Classic1.jpg";
import Classic2 from "../assets/Image/Classic2.jpg";
import Station from "../assets/Image/Station.jpg";
import Sky1 from "../assets/Image/Sky1.jpg";
import Sky2 from "../assets/Image/Sky2.jpg";
import Money from "../assets/Image/money.jpg";
import ChildRight from "../assets/Image/childright.jpg";

const Gallery = () => {
  // ✅ Images grouped into grids
  const gridImages = [
    // Grid 1
    [
      { src: Palkhi2, span: "col-span-2 row-span-2" },
      { src: Palkhi9 },
      { src: Palkhi10 },
    ],
    // Grid 2
    [
      { src: Palkhi11 },
      { src: Palkhi1 },
      { src: Palkhi4, span: "col-span-2 row-span-2" },
    ],
    // Grid 3
    [
      { src: Chirag, span: "col-span-2 row-span-2" },
      { src: Palkhi3 },
      { src: Palkhi8 },
    ],
    // Grid 4
    [
      { src: Palkhi5 },
      { src: Palkhi7 },
      { src: Palkhi6, span: "col-span-2 row-span-2" },
    ],
    // Grid 5
    [
      { src: Mandir1, span: "col-span-2 row-span-2" },
      { src: Mandir6 },
      { src: Mandir2 },
    ],
    // Grid 6
    [
      { src: Mandir4 },
      { src: Mandir3 },
      { src: Mandir5, span: "col-span-2 row-span-2" },
    ],
    // Grid 7
    [
      { src: Parade, span: "col-span-2 row-span-2" },
      { src: NC2 },
      { src: Classic2 },
    ],
    // Grid 8
    [
      { src: NC3 },
      { src: Station },
      { src: Sky2, span: "col-span-2 row-span-2" },
    ],
    // Grid 9
    [
      { src: Classic1, span: "col-span-2 row-span-2" },
      { src: Money },
      { src: Sky1 },
    ],
  ];

  return (
    <div className="m-0 p-0 bg-black font-sans">
      {/* Hero Section */}
      <section className="p-0 m-0">
        <div
          className="min-h-screen flex justify-end items-center bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${ChildRight})` }}
        >
          <div className="p-8 text-5xl sm:text-6xl md:text-7xl">
            <p className="text-white">
              <span className="text-orange-500">Photos </span>speak
            </p>
            <p className="text-white">
              when <span className="text-orange-500">words</span> are
            </p>
            <p className="text-white">
              fail to <span className="text-orange-500">explain</span>
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="m-4 p-4">
        <div className="flex justify-center items-center p-8">
          <h1 className=" font-extrabold  text-center text-6xl text-orange-500 mb-10">
            Gallery
          </h1>
        </div>

        {/* ✅ Gallery Grids */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 p-2 m-2">
          {gridImages.map((grid, idx) => (
            <div key={idx} className="grid grid-cols-2 grid-rows-3 gap-2">
              {grid.map((img, i) => (
                <div
                  key={i}
                  className={`${img.span || ""} shadow-2xl rounded-lg overflow-hidden`}
                >
                  <img
                    loading="lazy"
                    src={img.src}
                    alt={`Gallery-${idx}-${i}`}
                    className="w-full h-auto rounded-lg transition-transform duration-300 ease-in-out transform-gpu hover:scale-110"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
