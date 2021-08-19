import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import TextField from '../TextField';

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  ${breakpointsMedia({
    xs: css`
      margin-bottom: 16px;
    `,
    md: css`
      margin-bottom: 32px;
    `,
  })};
`;

const Select = styled.datalist`
  border: 1px solid ${({ theme }) => theme.colors.background.main.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${breakpointsMedia({
    xs: css`
      width: 100%;
      max-width: 318px;
    `,
    md: css`
      width: fit-content;
    `,
  })};
`;

const Input = styled(TextField)`
  width: auto;
`;

export default function SelectField({
  id,
  name,
  onChange,
  value,
  labelName,
  options,
  list,
  ...props
}) {
  return (
    <SelectWrapper>
      <Input
        id={id}
        name={name}
        labelName={labelName}
        value={value}
        onChange={onChange}
        list={list}
        type="search"
      />
      <Select
        id={list}
        name={name}
        onChange={onChange}
        value={value}
        required
        {...props}
      >
        {options.map((option) => (
          <option value={option.text} id={option.value}>
            {option.text}
          </option>
        ))}
      </Select>
    </SelectWrapper>
  );
}

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  list: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
