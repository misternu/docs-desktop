import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Option from './Option';

const SidebarStyle = styled.div`
  position: fixed;
  width: 200px;
  height: 100%;
  background: gray;
`;

const SearchStyle = styled.input`
  position: absolute;
  width: 170px;
  margin-top: 10px;
  margin-left: 10px;
  padding: 3px;
  border-radius: 6px;
`;

const OptionsStyle = styled.ul`
  background: gainsboro;
  margin-top: 45px;
  padding: 0;
  height: 100%;
`;

const Sidebar = props => {
  const options = props.entries
    .filter(e => e.name.includes(props.search))
    .map(option => (
      <Option
        selected={props.selected === option.name}
        key={option.name}
        name={option.name}
        onClick={() => props.clickOption(option.name)}
      />
    ));
  return (
    <SidebarStyle>
      <SearchStyle
        id="search"
        type="text"
        value={props.search}
        onChange={props.searchChange}
      />
      <OptionsStyle>{options}</OptionsStyle>
    </SidebarStyle>
  );
};

Sidebar.propTypes = {
  search: PropTypes.string,
  searchChange: PropTypes.func,
  selected: PropTypes.string,
  entries: PropTypes.arrayOf(PropTypes.object)
};

export default Sidebar;
