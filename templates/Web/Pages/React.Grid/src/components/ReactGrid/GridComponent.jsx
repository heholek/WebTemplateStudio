﻿import React from "react";
import ImgGreyBox from "../../images/GreyBox.svg"
import PropTypes from "prop-types";

const GridComponent = ({ gridItem }) => {
  const {header, shortDescription} = gridItem;
  return (
    <div className="col-md-4 col-sm-12 p-5">
      <img src={ImgGreyBox} alt="Default Grey Box" className="mb-3" />
      <h3>{header}</h3>
      <p>{shortDescription}</p>
    </div>
  );
}

GridComponent.propTypes = {
  gridItem: PropTypes.any
}

export default GridComponent;