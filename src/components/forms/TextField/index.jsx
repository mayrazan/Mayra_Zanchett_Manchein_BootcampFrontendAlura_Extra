import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import LabelField from '../Label';
import propToStyle from '../../../theme/utils/propToStyle';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  border: 1px solid ${({ theme }) => theme.colors.background.main.color};
  padding: 11px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${propToStyle('width')}
  ${breakpointsMedia({
    xs: css`
      width: 100%;
      max-width: 318px;
    `,
    md: css`
      width: fit-content;
      max-width: none;
    `,
  })};
`;

export default function TextField({
  name,
  onChange,
  value,
  id,
  as,
  labelName,
  ...props
}) {
  return (
    <InputWrapper>
      <LabelField htmlFor={id} variant="label">
        {labelName}
      </LabelField>
      <Input
        name={name}
        onChange={onChange}
        value={value}
        id={id}
        required
        as={as}
        {...props}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  as: PropTypes.string,
  labelName: PropTypes.string.isRequired,
};

TextField.defaultProps = {
  as: 'input',
};
