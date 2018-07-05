import React from "react";
import PropTypes from "prop-types";

const Paragraph = ({ p }) => {
  return <pre dangerouslySetInnerHTML={{ __html: p.text.trim() }} />;
};

const ManPageSynopsis = ({ programName, paragraphs }) => {
  var sectionParagraphs = paragraphs.map((p, idx) => {
    return (
      <div className="section-paragraphs" key={idx}>
        <Paragraph p={p} />
      </div>
    );
  });
  return (
    <div className="manpage-section-synopsis mb-3">
      <h3>Syntax of {programName}</h3>
      {sectionParagraphs}
    </div>
  );
};

ManPageSynopsis.propTypes = {
  programName: PropTypes.string,
  paragraphs: PropTypes.array
};

ManPageSynopsis.defaultProps = {};

export default ManPageSynopsis;
