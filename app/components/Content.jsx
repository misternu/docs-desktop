import React from 'react';
import PropTypes from 'prop-types';

const Content = props => (
  <div className="content">
    <h1>{props.name}</h1>
    <p>{props.description}</p>
  </div>
);

Content.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};

export default Content;
