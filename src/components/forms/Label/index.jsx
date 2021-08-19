import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text, { TextStyleVariants } from '../../foundation/Text';

const Label = styled(Text)`
  padding-bottom: 8px;
  ${({ variant }) => (variant === 'radioLabel' ? TextStyleVariants.radioLabel : TextStyleVariants.label)}
`;

export default function LabelField({
  htmlFor, children, variant, ...props
}) {
  return (
    <Label
      tag="label"
      variant={variant}
      htmlFor={htmlFor}
      margin="0"
      {...props}
    >
      {children}
    </Label>
  );
}

LabelField.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

LabelField.defaultProps = {
  variant: 'label',
};
