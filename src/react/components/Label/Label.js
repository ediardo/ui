import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Label = ({ icon, text, title }) => {
  return (
    <span title={title}>
      <span className="label-icon">{icon}</span>
      <span className="label-text">{text}</span>
    </span>
  );
};

Label.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string
};

export default Label;
