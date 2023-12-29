// Blur.jsx
import React from "react";
import PropTypes from "prop-types";

const Blur = ({ position, backgroundColor, children }) => (
  <div
    className={`relative ${position} ${backgroundColor} overflow-hidden backdrop`}
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: `radial-gradient(circle, #43021C, transparent)`,
      color: "white",
    }}
  >
    {children}
    <div className="absolute inset-y-0 left-0 right-0 bottom-0"></div>
  </div>
);

Blur.propTypes = {
  position: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
};

export default Blur;
