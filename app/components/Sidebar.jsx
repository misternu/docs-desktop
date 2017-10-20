import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = props => {
  const options = props.options.map(option => {
    const isSelected = props.selected === option;
    return (
      <li
        id={isSelected ? 'selected' : null}
        key={option}
        onClick={() => props.clickOption(option)}
      >
        {option}
      </li>
    );
  });
  return (
    <div className="sidebar">
      <input
        id="search"
        type="text"
        value={props.search}
        onChange={props.searchChange}
      />
      <ul id="options">{options}</ul>
    </div>
  );
};

Sidebar.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  search: PropTypes.string,
  searchChange: PropTypes.function,
  clickOption: PropTypes.function,
  selected: PropTypes.string
};

export default Sidebar;
