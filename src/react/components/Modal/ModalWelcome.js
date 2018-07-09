import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { CarouselWelcome } from "../Carousel";

const ModalHeader = ({ children }) => {
  return (
    <div className="modal-header">
      <h3>{children}</h3>
    </div>
  );
};

class ModalWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    document.cookie = `hasSeenWelcome=true;max-age=${60 * 60 * 24 * 7}`;
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Modal isOpen={isOpen} className="modal-welcome">
        <ModalHeader>Welcome to Kommandr!</ModalHeader>
        <ModalBody>
          <p>
            Kommandr is an open source project with the ambitious mission of
            helping users of the command-line interface to discover, learn
            about, save, and share commands.
          </p>
          <CarouselWelcome />
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
