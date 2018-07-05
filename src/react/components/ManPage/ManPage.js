import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { ProgramTitle } from "../Program";
import ManPageParagraphs from "./ManPageParagraphs";
import { ProgramDescription, ProgramCommands } from "../Program";
import { Nav, NavLink } from "reactstrap";

class ManPage extends Component {
  componentDidMount() {
    const { program } = this.props;
    document.title = `${program.name} - kommandr.com`;
  }

  render() {
    const { program } = this.props;
    var categories = [];
    if (program.manPage) {
      categories = [
        ...categories,
        <NavLink href="#usage" key={1}>
          Usage and options
        </NavLink>
      ];
    }
    categories = [
      ...categories,
      <NavLink href="#related-commands" key={0}>
        Related Commands
      </NavLink>
    ];
    return (
      <Fragment>
        <ProgramTitle name={program.cliName} withBadge mode="full" />
        <ProgramDescription program={program} mode="full" />
        <Nav>
          <span style={{ fontWeight: "bold", padding: "0.5rem 0rem" }}>
            Jump to:
          </span>
          {categories}
        </Nav>
        {program.manPage && <ManPageParagraphs program={program} />}
        <ProgramCommands program={program.cliName} compact />
      </Fragment>
    );
  }
}

ManPage.propTypes = {
  program: PropTypes.object
};

export default ManPage;
