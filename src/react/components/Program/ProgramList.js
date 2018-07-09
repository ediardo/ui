import React from "react";
import PropTypes from "prop-types";
import ProgramPreview from "./ProgramPreview";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const ProgramList = ({ programs }) => {
  return (
    <ListGroup flush>
      {programs.map((program, idx) => (
        <Link
          to={`/manpages/${program.platformName}/${program.name}`}
          className="box-link"
          key={idx}
        >
          <ListGroupItem>
            <ProgramPreview key={program.id} program={program} mode="minimal" />
          </ListGroupItem>
        </Link>
      ))}
    </ListGroup>
  );
};

ProgramList.defaultProps = {
  programs: PropTypes.object
};

export default ProgramList;
