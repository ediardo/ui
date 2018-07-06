import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Label from "./Label";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faLinux from "@fortawesome/fontawesome-free-brands/faLinux";
import faWindows from "@fortawesome/fontawesome-free-brands/faWindows";
import faApple from "@fortawesome/fontawesome-free-brands/faApple";

const LabelPlatform = ({ platform }) => {
  var icon, title;
  switch (platform) {
    case "linux":
      icon = <FontAwesomeIcon icon={faLinux} />;
      title = "Runs on Linux";
      break;
    case "windows":
      icon = <FontAwesomeIcon icon={faWindows} />;
      title = "Runs on Windows";
      break;
    case "macos":
      icon = <FontAwesomeIcon icon={faApple} />;
      title = "Runs on macOS";
      break;
    default:
      icon = (
        <Fragment>
          <FontAwesomeIcon icon={faLinux} /> <FontAwesomeIcon icon={faApple} />{" "}
          <FontAwesomeIcon icon={faWindows} />
        </Fragment>
      );

      title = "Can be installed and run on many OS's";
  }
  return <Label icon={icon} title={title} />;
};

LabelPlatform.propTypes = {
  value: PropTypes.number,
  type: PropTypes.string
};

LabelPlatform.defaultProps = {
  value: 0,
  type: "view"
};

export default LabelPlatform;
