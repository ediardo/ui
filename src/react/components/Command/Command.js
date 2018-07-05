import React, { Component } from "react";
import PropTypes from "prop-types";
import CommandContent from "./CommandContent";
import {
  LabelContainer,
  LabelPlatform,
  LabelDate,
  LabelMetric,
  LabelUser
} from "../Label";
import { Program } from "../Program";
import CommandTitle from "./CommandTitle";
import CommandInfo from "./CommandInfo";
import CommandDescription from "./CommandDescription";

class Command extends Component {
  componentDidMount() {
    const { command } = this.props;
    document.title = `${command.program.name} / ${
      command.title
    } - kommandr.com`;
  }
  render() {
    const { command } = this.props;
    return (
      <div className="command mt-2 mb-2">
        <CommandTitle
          programName={command.program.cliName}
          commandTitle={command.title}
        />

        <CommandContent>{command.rawContent}</CommandContent>

        <CommandInfo>
          <LabelContainer inline={true}>
            <LabelUser user={command.author} />
            <LabelDate timestamp={command.createdAt} />
            <LabelPlatform platform={command.program.platformName} />
            <LabelMetric metric="views" value={command.totalViews} />
          </LabelContainer>
          <CommandDescription description={command.description} />
        </CommandInfo>
        <Program program={command.program} compact />
      </div>
    );
  }
}

Command.propTypes = {
  command: PropTypes.object,
  mode: PropTypes.string
};

Command.defaultProps = {
  mode: "compact"
};
export default Command;
