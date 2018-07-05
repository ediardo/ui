import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Command } from "../components/Command";
import NoMatch from "./NoMatch";

const COMMAND_QUERY = gql`
  query command($username: String!, $slugTitle: String!) {
    command(username: $username, slugTitle: $slugTitle) {
      id
      title
      rawContent
      description
      forkFrom
      totalViews
      createdAt
      author {
        id
        username
      }
      program {
        id
        name
        platformName
        shortDescription
        cliName
        manPage {
          id
          name
        }
      }
    }
  }
`;
const ViewCommand = ({ match }) => {
  return (
    <div className="view-command">
      <Query query={COMMAND_QUERY} variables={match.params}>
        {({ loading, error, data: { command } }) => {
          if (loading) return "Loading";
          if (error) return `Error!: ${error}`;
          if (command === null) {
            return <NoMatch />;
          } else {
            return <Command command={command} mode="view" />;
          }
        }}
      </Query>
    </div>
  );
};

ViewCommand.propTypes = {
  match: PropTypes.object
};
export default ViewCommand;
