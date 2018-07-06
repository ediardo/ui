import React from "react";
import PropTypes from "prop-types";
import { LabelContainer, LabelPlatform, LabelMetric } from "../Label";

const ProgramPreview = ({ program }) => {
  return (
    <div className="program-preview">
      <h5 className="program-name program-title">{program.cliName}</h5>
      <span>{program.shortDescription}</span>
      <LabelContainer inline={true}>
        <LabelPlatform platform={program.platformName} />
        <LabelMetric metric="views" value={program.totalViews} />
      </LabelContainer>
    </div>
  );
};

ProgramPreview.propTypes = {
  program: PropTypes.object
};

export default ProgramPreview;
