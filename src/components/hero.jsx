// Hero.jsx
import React from "react";
import Blur from "./blur";

const Hero = () => (
  <section className="min-h-screen relative overflow-hidden text-white">
      <Blur></Blur>
    <img
      src="src\assets\iste_owl.png"
      alt="Image description"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain"
    />
    <div className="absolute inset-0 flex items-center justify-center text-center">
        <div>
          <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-my-white mt-72">
            ATHENA
          </h1>
          <p className="text-3xl sm:text-3xl lg:text-5xl font-bold text-my-white">
            24
          </p>
        </div>
      </div>
  </section>
);

export default Hero;
