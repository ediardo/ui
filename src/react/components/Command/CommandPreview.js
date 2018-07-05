import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CommandContent from "./CommandContent";
import CommandInfo from "./CommandInfo";

import {
  LabelContainer,
  LabelPlatform,
  LabelDate,
  LabelMetric,
  LabelUser
} from "../Label";

// TODO: Move this into CommandTitle.js component
const CommandTitle = ({ minimal, compact, children }) => {
  if (minimal) {
    return <h5 className="command-title">{children}</h5>;
  } else if (compact) {
    return <h4 className="command-title">{children}</h4>;
  }
};

CommandTitle.propTypes = {
  minimal: PropTypes.bool,
  compact: PropTypes.bool
};
CommandTitle.defaultProps = {
  minimal: false,
  compact: false
};

const CommandPreviewMinimal = ({ command }) => {
  return (
    <Fragment>
      <CommandTitle minimal>
        <a href={`/@${command.author.username}/${command.slugTitle}`}>
          {command.title}
        </a>
      </CommandTitle>
      <CommandInfo>
        <LabelContainer inline={true}>
          <LabelUser user={command.author} />
          <LabelPlatform platform={command.program.platformName} />
          <LabelMetric metric="views" value={command.totalViews} />
        </LabelContainer>
      </CommandInfo>
    </Fragment>
  );
};

const CommandPreviewCompact = ({ command }) => {
  return (
    <Fragment>
      <CommandTitle compact>
        <a href={`/@${command.author.username}/${command.slugTitle}`}>
          {command.program.name} / {command.title}
        </a>
      </CommandTitle>
      <Fragment>
        <CommandContent>{command.rawContent}</CommandContent>
        <CommandInfo>
          <LabelContainer inline={true}>
            <LabelUser user={command.author} />
            <LabelDate timestamp={command.createdAt} />
            <LabelPlatform platform={command.program.platformName} />
            <LabelMetric metric="views" value={command.totalViews} />
          </LabelContainer>
        </CommandInfo>
      </Fragment>
    </Fragment>
  );
};

const CommandPreview = ({ command, minimal, compact }) => {
  let preview;
  if (minimal) {
    preview = <CommandPreviewMinimal command={command} />;
  } else if (compact) {
    preview = <CommandPreviewCompact command={command} />;
  }
  return <div className="command">{preview}</div>;
};

CommandPreview.propTypes = {
  command: PropTypes.object,
  minimal: PropTypes.bool,
  compact: PropTypes.bool
};

CommandPreview.defaultProps = {
  minimal: false,
  compact: false
};
export default CommandPreview;
