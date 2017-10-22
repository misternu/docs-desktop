import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OptionStyle = styled.li`
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 15.4px;
  padding: 3px;
  background: ${props => (props.selected ? 'gray' : 'initial')};
  color: ${props => (props.selected ? 'white' : 'black')};
  &:hover {
    background: ${props => (props.selected ? 'gray' : '#afafaf')};
  }
`;

const Option = props => (
  <OptionStyle selected={props.selected} onClick={props.onClick}>
    {props.name}
  </OptionStyle>
);

Option.propTypes = {
  name: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default Option;
