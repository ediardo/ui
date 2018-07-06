import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTerminal from "@fortawesome/fontawesome-free-solid/faTerminal";
import { CommandList } from "../components/Command";
import { ListWithFilter } from "../components/List";

const sortByOptions = [
  { label: "Most Popular", key: "most_popular" },
  { label: "Most Recent", key: "newest" },
  { label: "Most Oldest", key: "oldest" }
];

class Content extends Component {
  componentDidMount() {
    document.title = "Commands - kommandr.com";
  }
  render() {
    return (
      <div className="main-commands">
        <h2>
          <FontAwesomeIcon
            icon={faTerminal}
            className="header-nav-button-icon"
          />{" "}
          Search Commands
        </h2>
        <ListWithFilter
          render={(query, sortBy) => (
            <CommandList query={query} sortBy={sortBy} compact withCounter />
          )}
          sortByOptions={sortByOptions}
          sortBy="most_popular"
        />
      </div>
    );
  }
}

export default Content;
