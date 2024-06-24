import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/salon.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
        <h3 className="text-4xl font-bold mb-4 font-alexBrush text-[#da5e9c]">Dream Maker</h3>
        <div>
          <h1 className="text-6xl font-extrabold mb-6">Turning Dreams into Unforgettable Moments!</h1>
          <p className="text-lg mb-8">
            We believe that it is all about the BIG DREAMS and the small details!
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className=" bg-[#da5e9c] hover:bg-[#a74275] focus:ring-4 focus:ring-[#debfce] text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



/*




import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/salon.jpg" alt="restaurant" />
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Turning Dreams into Unforgettable Moments!</h1>
          <p>
            We believe that it is all about the BIG DREAMS and the samll
            details!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;






*/