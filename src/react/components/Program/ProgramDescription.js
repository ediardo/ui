import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faInfoCircle from "@fortawesome/fontawesome-free-solid/faInfoCircle";

const ProgramDescription = ({ program, withLink }) => {
  return (
    <div className="program-description mb-2">
      <p>{program.shortDescription}</p>
      {withLink && (
        <Button
          color="success"
          tag={Link}
          to={`/manpages/${program.platformName}/${program.name}`}
          outline
        >
          <FontAwesomeIcon icon={faInfoCircle} /> Learn more about this program
        </Button>
      )}
    </div>
  );
};

ProgramDescription.propTypes = {
  program: PropTypes.object,
  withLink: PropTypes.bool
};

ProgramDescription.defaultProps = {
  withLink: false
};

export default ProgramDescription;
