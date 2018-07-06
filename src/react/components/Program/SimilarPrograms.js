import React from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import ProgramList from "./ProgramList";

const SIMILAR_PROGRAMS_QUERY = gql`
  query programs($cliName: String!, $platformName: String, $k: Int!) {
    programs: similarPrograms(
      cliName: $cliName
      platformName: $platformName
      k: $k
    ) {
      id
      cliName
      name
      totalViews
      shortDescription
      platformName
    }
  }
`;
const SimilarPrograms = ({ program, platformName, compact }) => {
  var title = compact ? (
    <h4>More related programs</h4>
  ) : (
    <h3>More related programs</h3>
  );
  return (
    <div className="similar-commands">
      {title}
      <Query
        query={SIMILAR_PROGRAMS_QUERY}
        variables={{ cliName: program, platformName, k: 6 }}
      >
        {({ loading, error, data: { programs } }) => {
          if (loading) return "Loading";
          if (error) return `Error: ${error}`;
          return <ProgramList programs={programs} />;
        }}
      </Query>
    </div>
  );
};

SimilarPrograms.propTypes = {
  program: PropTypes.string,
  platformName: PropTypes.string,
  compact: PropTypes.bool
};

SimilarPrograms.defaultProps = {
  compact: false
};
export default SimilarPrograms;
