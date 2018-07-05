import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import MainCommands from "./MainCommands";
import ViewManPage from "./ViewManPage";
import ViewCommand from "./ViewCommand";
import NoMatch from "./NoMatch";
import { ModalWelcome } from "../components/Modal";
import Footer from "../components/Footer/Footer";

const hasSeenWelcome = document.cookie.includes("hasSeenWelcome");

const App = props => {
  return (
    <Fragment>
      <Header />
      <Container className="mt-3">
        <Switch>
          <Route path="/" exact component={MainCommands} />
          <Route path="/@:username/:slugTitle" component={ViewCommand} />
          <Route path="/manpages/:platformName/:name" component={ViewManPage} />
          <Route component={NoMatch} />
        </Switch>
        {!hasSeenWelcome && <ModalWelcome />}
      </Container>
      <Footer />
    </Fragment>
  );
};

App.propTypes = {
  data: PropTypes.object
};

export default App;
