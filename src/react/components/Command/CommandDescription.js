import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CommandDescription = ({ description }) => {
  return (
    <div className="command-description mt-3">
      <p className={classNames({ "text-muted": description === null })}>
        {description === null && (
          <span>The author didn't provide a description for this command</span>
        )}
      </p>
    </div>
  );
};

CommandDescription.propTypes = {
  description: PropTypes.string
};

export default CommandDescription;
