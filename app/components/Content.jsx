import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentStyle = styled.div`
  position: absolute;
  margin-left: 200px;
  padding-left: 40px;
  width: 100%;
  height: 100%;
  & h1 {
    font-size: 24px;
    font-weight: 500;
    line-height: 26.4px;
  }
  & p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;

const Content = props => {
  const entry = props.entries.find(e => e.name === props.selected);
  const name = entry ? entry.name : '';
  const description = entry ? entry.description : '';
  return (
    <ContentStyle>
      <h1>{name}</h1>
      <p>{description}</p>
    </ContentStyle>
  );
};

Content.propTypes = {
  selected: PropTypes.string,
  entries: PropTypes.arrayOf(PropTypes.object)
};

export default Content;
