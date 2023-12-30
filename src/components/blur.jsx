import React from "react";
import PropTypes from "prop-types";

const Blur = ({ coordinates }) => (
  <div
    style={coordinates}
    aria-hidden="true"
    className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-120 lg:h-120 xl:w-150 xl:h-150 rounded-full bg-gradient-to-b from-hero-bg to-transparent blur-3xl mx-auto scale-y-150 scale-x-150 opacity-100"
  ></div>
);

Blur.propTypes = {
  coordinates: PropTypes.object.isRequired,
};

export default Blur;
