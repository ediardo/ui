import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import CommandPreview from "./CommandPreview";
import gql from "graphql-tag";
import { ListGroup, ListGroupItem } from "reactstrap";
const COMMANDS_QUERY = gql`
  query commands(
    $title: String
    $programs: [String]
    $platforms: [String]
    $sortBy: String
    $rawQuery: String
  ) {
    commands(
      title: $title
      programs: $programs
      platforms: $platforms
      sortBy: $sortBy
      rawQuery: $rawQuery
    ) {
      id
      title
      slugTitle
      rawContent
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
      }
    }
  }
`;

class CommandList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { query, sortBy } = this.props;
    return (
      query.length !== nextProps.query.length || sortBy !== nextProps.sortBy
    );
  }

  render() {
    const { query, sortBy, compact, minimal, withCounter } = this.props;
    var title = "",
      programs = [],
      platforms = [],
      rawQuery = [];
    query.forEach(q => {
      if (q.key === undefined) {
        title = q.value;
      } else if (q.key === "program") {
        programs.push(q.value);
      } else if (q.key === "platform") {
        platforms.push(q.value);
      }
      rawQuery.push(q.label);
    });
    return (
      <Query
        query={COMMANDS_QUERY}
        variables={{
          title: title,
          programs,
          platforms,
          rawQuery: rawQuery.toString(),
          sortBy
        }}
      >
        {({ loading, error, data: { commands } }) => {
          if (loading) return "Loading...";
          if (error) return "Error, try a different query";
          if (commands.length === 0) {
            return (
              <h3>
                It looks like your search didn't get any results... Try a
                different query
              </h3>
            );
          } else {
            return (
              <Fragment>
                {withCounter && (
                  <p className="text-muted counter-results">
                    Showing results for {commands.length} out of 4,263 commands
                  </p>
                )}
                <ListGroup flush>
                  {commands.map((command, idx) => (
                    <a
                      href={`/@${command.author.username}/${command.slugTitle}`}
                      className="box-link"
                      key={idx}
                    >
                      <ListGroupItem>
                        <CommandPreview
                          key={command.id}
                          command={command}
                          compact={compact}
                          minimal={minimal}
                        />
                      </ListGroupItem>
                    </a>
                  ))}
                </ListGroup>
              </Fragment>
            );
          }
        }}
      </Query>
    );
  }
}

CommandList.propTypes = {
  query: PropTypes.array,
  sortBy: PropTypes.string,
  compact: PropTypes.bool,
  minimal: PropTypes.bool,
  withCounter: PropTypes.bool
};

CommandList.defaultProps = {
  query: [],
  sortBy: "most_popular",
  compact: false,
  minimal: false,
  withCounter: false
};

export default CommandList;
