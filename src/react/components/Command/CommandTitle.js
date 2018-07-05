import React from "react";
import PropTypes from "prop-types";
import { Badge } from "reactstrap";

const CommandTitle = ({ programName, commandTitle }) => {
  commandTitle = `${commandTitle.charAt(0).toLowerCase() +
    commandTitle.substr(1)}`;
  return (
    <h2 className="command-title mb-3">
      Use <Badge color="success">{programName}</Badge> to {commandTitle}
    </h2>
  );
};

CommandTitle.propTypes = {
  programName: PropTypes.string,
  commandTitle: PropTypes.string
};

export default CommandTitle;
