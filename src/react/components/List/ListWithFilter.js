import React, { Component } from "react";
import PropTypes from "prop-types";
import CreatableSelect from "react-select/lib/Creatable";
import { Button, ButtonGroup } from "reactstrap";
import _ from "underscore";

const components = {
  DropdownIndicator: null
};

const createOption = label => {
  let groups = label.match(/(^\w+:)?(.*)/);
  return {
    label: groups[0],
    key: groups[1] ? groups[1].trim().slice(0, -1) : undefined,
    value: groups[2].trim()
  };
};

const placeholders = [
  "Try 'list docker containers'",
  "Try 'install npm package'",
  "Try 'remove npm package'",
  "Try 'program:drush'",
  "Try 'program:free'",
  "Try 'program:du'",
  "Try 'show all processes'",
  "Try 'change user permissions'",
  "Try 'show free memory'",
  "Try 'program:git commit'",
  "Try 'program:git reset'",
  "Try 'git delete files'",
  "Try 'available disk space'",
  "Try 'find all old files'",
  "Try 'program:npm'",
  "Try 'platform:linux'",
  "Try 'restore mysql databases'",
  "Try 'compile java'",
  "Try 'compress files'",
  "Try 'program:rsync'",
  "Try 'program:ssh'",
  "Try 'platform:windows'",
  "Try 'platform:macos'",
  "Try 'program:git'",
  "Try 'Add ssh keys'",
  "Try 'program:wget'",
  "Try 'program:curl'",
  "Try 'Delete all files in directory'",
  "Try 'Uncompress and extract archive'",
  "Try 'show current hostname'",
  "Try 'remove all directories'"
];

const SortButtons = ({ options, active, handleOnClick, color }) => {
  const buttons = options.map((option, idx) => {
    return (
      <Button
        color={color}
        active={option.key === active}
        key={idx}
        outline
        onClick={() => handleOnClick(option.key)}
      >
        {option.label}
      </Button>
    );
  });
  return <ButtonGroup>{buttons}</ButtonGroup>;
};

class ListWithFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      value: [],
      sortBy: this.props.sortBy
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleRadioBtnClick = this.handleRadioBtnClick.bind(this);
  }

  handleChange(value, actionMeta) {
    this.setState({ value });
  }

  handleInputChange(inputValue) {
    this.setState({ inputValue });
  }

  handleKeyDown(event) {
    const { inputValue, value } = this.state;
    if (!inputValue) return;
    if (event.key === "Enter" || event.key === "Tab") {
      this.setState({
        inputValue: "",
        value: [...value, createOption(inputValue)]
      });
      event.preventDefault();
    }
  }

  handleRadioBtnClick(sortBy) {
    this.setState({ sortBy });
  }

  render() {
    const { inputValue, value, sortBy } = this.state;
    const { sortByOptions } = this.props;
    return (
      <div className="list-with-filter">
        <div className="d-flex">
          <div className=" pr-1 pl-0 flex-grow-1">
            <CreatableSelect
              components={components}
              inputValue={inputValue}
              isClearable
              isMulti
              menuIsOpen={false}
              onChange={this.handleChange}
              onInputChange={this.handleInputChange}
              onKeyDown={this.handleKeyDown}
              autoFocusboolean={true}
              placeholder={
                placeholders[Math.round(Math.random() * placeholders.length)]
              }
              value={value}
            />
          </div>
          {sortByOptions.length > 0 && (
            <div className=" pr-0 pl-1">
              <SortButtons
                color="success"
                handleOnClick={this.handleRadioBtnClick}
                options={sortByOptions}
                active={sortBy}
              />
            </div>
          )}
        </div>
        {this.props.render(value, sortBy)}
      </div>
    );
  }
}

ListWithFilter.propTypes = {
  query: PropTypes.string,
  filterPlaceholder: PropTypes.string,
  sortByOptions: PropTypes.array,
  sortBy: PropTypes.string
};

ListWithFilter.defaultProps = {
  query: "",
  filterPlaceholder: "Search...",
  sortByOptions: [],
  sortBy: ""
};

export default ListWithFilter;
