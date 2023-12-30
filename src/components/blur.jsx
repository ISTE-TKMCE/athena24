import React from "react";
import PropTypes from "prop-types";

const Blur = ({ blurCenter, blurRadius, children }) => (
  <div
    className={`relative overflow-hidden backdrop`}
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: `radial-gradient(circle at ${blurCenter}, #43021C, transparent ${blurRadius})`,
      color: "white",
    }}
  >
    {children}
    <div className="absolute inset-y-0 left-0 right-0 bottom-0"></div>
  </div>
);

Blur.propTypes = {
  blurCenter: PropTypes.string,
  blurRadius: PropTypes.string,
  children: PropTypes.node,
};

export default Blur;
