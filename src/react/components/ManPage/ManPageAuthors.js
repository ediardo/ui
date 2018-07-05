import React from "react";
import PropTypes from "prop-types";

const Paragraph = ({ p }) => {
  return <p dangerouslySetInnerHTML={{ __html: p.text.trim() }} />;
};

const ManPageOptions = ({ programName, paragraphs }) => {
  var sectionParagraphs = paragraphs.map((p, idx) => {
    return (
      <div className="section-paragraphs" key={idx}>
        <Paragraph p={p} />
      </div>
    );
  });
  return (
    <div className="manpage-section-authors">
      <h3>Authors</h3>
      {sectionParagraphs}
    </div>
  );
};

ManPageOptions.propTypes = {
  programName: PropTypes.string,
  paragraphs: PropTypes.array
};

ManPageOptions.defaultProps = {};

export default ManPageOptions;
