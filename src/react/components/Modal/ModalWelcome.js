import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

class ModalWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    document.cookie = "hasSeenWelcome=true";
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Modal isOpen={isOpen}>
        <ModalHeader>Welcome to Kommandr!</ModalHeader>
        <ModalBody>
          <p>
            Kommandr is an open source project with the ambitious mission of
            helping developers, SysAdmins, and students learn how to use the
            command-line interface. Today you can search for commands by
            entering free text, platform:, and/or program:.
            Soon you will be able to create an account to save, comment on,
            add, and share the commands you find most useful.
          </p>
          <p>
            This project is under development. You can contact us
            contact@kommandr.com and find us on{" "}
            <a href="https://github.com/kommandr/kommandr">github.com</a>
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>
            Let me try it!
          </Button>
        </ModalFooter>{" "}
      </Modal>
    );
  }
}

export default ModalWelcome;
