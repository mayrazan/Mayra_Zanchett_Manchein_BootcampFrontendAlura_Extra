import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const InputWrapper = styled.div`
  ${breakpointsMedia({
    xs: css`
      margin-bottom: 16px;
    `,
    md: css`
      margin-bottom: 32px;
    `,
  })};
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.background.main.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 10px 15px 0 rgba(111, 30, 81, 0.05);
`;

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  as,
  ...props
}) {
  return (
    <InputWrapper>
      <Input
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        required
        as={as}
        {...props}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  as: PropTypes.string,
};

TextField.defaultProps = {
  as: 'input',
};
