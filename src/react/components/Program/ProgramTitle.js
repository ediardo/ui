import React from "react";
import PropTypes from "prop-types";
import { Badge } from "reactstrap";

const ProgramTitle = ({ name, withBadge, compact }) => {
  if (withBadge) {
    name = <Badge color="success">{name}</Badge>;
  }
  if (compact) {
    return <h3 className="program-title">What does the {name} program do? </h3>;
  } else {
    return <h2 className="program-title">What does the {name} program do?</h2>;
  }
};

ProgramTitle.propTypes = {
  name: PropTypes.string,
  withBadge: PropTypes.bool,
  compact: PropTypes.bool
};

ProgramTitle.defaultProps = {
  withBadge: false,
  compact: false
};

export default ProgramTitle;
