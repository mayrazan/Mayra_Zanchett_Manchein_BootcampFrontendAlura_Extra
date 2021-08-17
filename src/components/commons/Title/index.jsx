import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

const Title = ({ text, ...props }) => (
  <Text
    tag="h1"
    variant={{ xs: 'titleSM', md: 'title' }}
    margin="0"
    {...props}
  >
    {text}
  </Text>
);

export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
