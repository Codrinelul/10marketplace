import PropTypes from "prop-types";
import React from "react";
import HeaderFour from "../wrappers/header/HeaderFour";


const LayoutFive = ({ children }) => {
  return (
    <div className="wrapper">
      {/* header */}
      <HeaderFour />
      {children}

    </div>
  );
};

LayoutFive.propTypes = {
  children: PropTypes.any
};

export default LayoutFive;
