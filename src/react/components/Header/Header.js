import React, { Component } from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import { Link, withRouter } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
  NavLink
} from "reactstrap";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <Navbar color="faded" expand="md" className="row">
            <NavbarBrand tag={Link} to={{ pathname: "/", state: "createNew" }}>
              <img alt="logo" className="logo" src="/img/logo-white-bg.png" />
            </NavbarBrand>
            <Collapse navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink
                    href="https://twitter.com/kommandr_com"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <a
                    className="github-button"
                    href="https://github.com/kommandr/kommandr"
                    data-size="large"
                    aria-label="Star kommandr/kommandr on GitHub"
                  >
                    Star
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object
};

export default withRouter(Header);
