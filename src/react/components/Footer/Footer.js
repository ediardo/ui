import React from "react";
import { Container } from "reactstrap";

const Footer = props => {
  return (
    <footer className="footer fixed-bottom">
      <Container>
        kommandr.com © {new Date().getFullYear()} |{" "}
        <a
          href="https://github.com/kommandr/kommandr/issues/new"
          target="_blank"
        >
          report bugs
        </a>{" "}
        |{" "}
        <a href="https://github.com/kommandr/kommandr" target="_blank">
          source code
        </a>{" "}
        | <a href="mailto:contact@kommandr.com">contact</a> |{" "}
        <a href="https://medium.com/@ediardo/first-step-towards-a-more-social-and-smart-command-library-fb27dccb7e71">
          Check out our release blog post!
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
