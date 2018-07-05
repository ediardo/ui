import React from "react";
import PropTypes from "prop-types";
import { Badge } from "reactstrap";

const Paragraph = ({ p }) => {
  return <p dangerouslySetInnerHTML={{ __html: p.text.trim() }} />;
};

const ManPageSubcommands = ({ programName, paragraphs, withCounter }) => {
  var sectionParagraphs = paragraphs.map((p, idx) => {
    return (
      <div className="section-paragraphs" key={idx}>
        <Paragraph p={p} />
      </div>
    );
  });
  return (
    <div className="manpage-section-subcommands mb-3">
      <h3>
        Subcommands available{" "}
        {withCounter && <Badge color="dark">~{paragraphs.length}</Badge>}
      </h3>
      {sectionParagraphs}
    </div>
  );
};

ManPageSubcommands.propTypes = {
  name: PropTypes.string,
  paragraphs: PropTypes.array,
  withCounter: PropTypes.bool
};

ManPageSubcommands.defaultProps = {
  withCounter: true
};

export default ManPageSubcommands;
