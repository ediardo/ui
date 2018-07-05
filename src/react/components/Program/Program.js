import React from "react";
import PropTypes from "prop-types";
import ProgramTitle from "./ProgramTitle";
import ProgramDescription from "./ProgramDescription";
import ProgramCommands from "./ProgramCommands";
import SimilarPrograms from "./SimilarPrograms";
import { Row, Col } from "reactstrap";

const Program = ({ program, compact }) => {
  return (
    <div className="program-details mt-">
      <ProgramTitle name={program.cliName} compact />
      <ProgramDescription program={program} withLink />
      <Row className="mt-4">
        <Col sm="6" xs="12">
          <ProgramCommands program={program.cliName} minimal />
        </Col>
        <Col sm="6" xs="12">
          <SimilarPrograms
            program={program.cliName}
            platformName={program.platformName}
            compact
          />
        </Col>
      </Row>
    </div>
  );
};

Program.propTypes = {
  program: PropTypes.object,
  compact: PropTypes.bool
};

Program.defaultProps = {
  compact: false
};
export default Program;
