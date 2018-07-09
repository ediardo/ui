import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ManPageSynopsys from "./ManPageSynopsis";
import ManPageOptions from "./ManPageOptions";
import ManPageSubcommands from "./ManPageSubcommands";
import ManPageAuthors from "./ManPageAuthors";

const ManPageParagraphs = ({ program, mode }) => {
  // get any paragraph whose section name include "option"
  const { paragraphs } = program.manPage;

  var sypnopsysParagraphs = paragraphs.filter(p =>
    p.section.match(/synopsis/i)
  );
  var optionsParagraphs = paragraphs.filter(
    p => p.is_option && p.section.match(/option|description/i)
  );
  // get any paragraph whose section name include the "command"
  var subcommandsParagraphs = paragraphs.filter(p =>
    p.section.match(/command/i)
  );

  // get any paragraph whose section name include the "command"
  var authorParagraphs = paragraphs.filter(p => p.section.match(/author/i));
  return (
    <Fragment>
      {sypnopsysParagraphs.length > 0 && (
        <ManPageSynopsys
          programName={program.cliName}
          paragraphs={sypnopsysParagraphs}
        />
      )}
      {optionsParagraphs.length > 0 && (
        <ManPageOptions
          programName={program.name}
          paragraphs={optionsParagraphs}
        />
      )}
      {subcommandsParagraphs.length > 0 && (
        <ManPageSubcommands
          programName={program.name}
          paragraphs={subcommandsParagraphs}
        />
      )}
      {authorParagraphs.length > 0 && (
        <ManPageAuthors
          programName={program.name}
          paragraphs={authorParagraphs}
        />
      )}
    </Fragment>
  );
};
ManPageParagraphs.propTypes = {
  program: PropTypes.object,
  mode: PropTypes.string
};

export default ManPageParagraphs;
