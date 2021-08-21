import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../layout/Box';

export default function ErrorMessage({ children, justifyContent }) {
  return (
    <Box
      display="flex"
      paddingBottom="20px"
      color="red"
      justifyContent={justifyContent}
    >
      <span>{children}</span>
    </Box>
  );
}

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.string,
};

ErrorMessage.defaultProps = {
  justifyContent: 'unset',
};
