import React from "react";
import PropTypes from "prop-types";
import { Badge } from "reactstrap";

const Paragraph = ({ p }) => {
  return <p dangerouslySetInnerHTML={{ __html: p.text.trim() }} />;
};

const ManPageOptions = ({ programName, paragraphs, withCounter }) => {
  var sectionParagraphs = paragraphs.map((p, idx) => {
    return (
      <div className="section-paragraphs" key={idx}>
        <Paragraph p={p} />
      </div>
    );
  });
  return (
    <div className="manpage-section-options mb-3">
      <h3>
        The options and parameters it takes{" "}
        {withCounter && <Badge color="dark">~{paragraphs.length}</Badge>}
      </h3>
      {sectionParagraphs}
    </div>
  );
};

ManPageOptions.propTypes = {
  programName: PropTypes.string,
  paragraphs: PropTypes.array,
  withCounter: PropTypes.bool
};

ManPageOptions.defaultProps = {
  withCounter: true
};

export default ManPageOptions;
