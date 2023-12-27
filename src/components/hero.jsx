import React from 'react';

/*used custom color.*/
const Hero = () => (
  <section className="min-h-screen relative bg-gradient-to-r from-hero-bg via-my-black to-hero-bg text-white">
     <div className="h-80 absolute inset-y-0 left-0 right-0 bottom-0 bg-gradient-to-b from-my-black to-transperant"></div>
    <img src="src\assets\iste_owl.png" alt="Image description" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain" />
    <div className="absolute inset-0 flex items-center justify-center text-center">
      <div>
        <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold mt-80 lg:mt-80 text-my-white">ATHENA</h1>
        <p className="text-3xl sm:text-3xl lg:text-5xl font-bold text-my-white">24</p>
      </div>
    </div>
  </section>
);

export default Hero;
