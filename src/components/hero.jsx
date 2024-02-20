import React from "react";
import Blur from "./blur";
import owl from "../assets/iste_owl.png"
import athena from "../assets/athena header 1.png"

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
    <section className="min-h-[70vh] relative overflow-hidden text-white font-primary">
      <Blur coordinates={blur1Coordinates} />
      <Blur coordinates={blur2Coordinates} />
      <img
        src={owl}
        alt="Image description"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain"
      />
      <img
        src={athena}
        alt="Athena"
        className="z-50 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </section>
  );
};

export default Hero;
