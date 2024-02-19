import React from "react";
import PropTypes from "prop-types";


const Blur = ({ coordinates }) => (
  <div
  style={{
    ...coordinates,
    background: "radial-gradient(circle, #EC0A65, #000000)",
  }}
    className="w-96 h-96 sm:w-96 sm:h-96 md:w-96 md:h-96 lg:w-96 lg:h-96 xl:w-96 xl:h-96 rounded-full blur-3xl mx-auto scale-y-150 scale-x-150 opacity-70"
  ></div>
);

Blur.propTypes = {
  coordinates: PropTypes.object.isRequired,
};

export default Blur;
