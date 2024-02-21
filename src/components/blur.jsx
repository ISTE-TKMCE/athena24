import React from "react";
import PropTypes from "prop-types";


const Blur = ({ coordinates }) => (
  <div
  style={{
    ...coordinates,
    background: "radial-gradient(circle, #EC0A65, #000000)",
  }}
   className="-z-5 w-96 h-96 sm:w-96 sm:h-96 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]  rounded-full blur-3xl mx-auto scale-y-150 scale-x-150 opacity-70 "
  ></div>
);

Blur.propTypes = {
  coordinates: PropTypes.object.isRequired,
};

export default Blur;
