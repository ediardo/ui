import React from "react";
import PropTypes from "prop-types";
import { CommandList } from "../Command";

const ProgramCommands = ({ program, compact, minimal }) => {
  let title;
  if (minimal) {
    title = <h4>More commands from this program</h4>;
  } else if (compact) {
    title = <h3>More commands from this program</h3>;
  }
  return (
    <div className="similar-commands mb-3">
      <a name="related-commands">{title}</a>
      <CommandList
        query={[{ key: "program", value: program }]}
        compact={compact}
        minimal={minimal}
      />
    </div>
  );
};

ProgramCommands.propTypes = {
  program: PropTypes.string,
  compact: PropTypes.bool
};

ProgramCommands.defaultProps = {
  compact: false
};

export default ProgramCommands;
