import React from "react";
import PropTypes from "prop-types";

const Blur = ({ coordinates }) => (
  <div
    style={{
      ...coordinates,
      background: "radial-gradient(circle, #EC0A65, #000000)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
      filter: "blur(8px)",
    }}
  ></div>
);

Blur.propTypes = {
  coordinates: PropTypes.object.isRequired,
};

export default Blur;
