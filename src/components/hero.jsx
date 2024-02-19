import React from "react";
import Blur from "./blur";

const Hero = () => {
  // Determine if the device is a smartphone or a laptop
  const isMobile = window.innerWidth <= 480;

  // Set coordinates based on the device type
  const blur1Coordinates = isMobile
    ? { position: "absolute", bottom: "-10%", left: "-15%" }
    : { position: "absolute", bottom: "0%", left: "-10%"};

  const blur2Coordinates = isMobile
    ? { position: "absolute", bottom: "70%", left: "30%" }
    : { position: "absolute", bottom: "20%", left: "80%"};

  return (
    <section className="min-h-screen relative overflow-hidden text-white">
      <Blur coordinates={blur1Coordinates} />
      <Blur coordinates={blur2Coordinates} />
      <img
        src="src/assets/iste_owl.png"
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
};

export default Hero;
