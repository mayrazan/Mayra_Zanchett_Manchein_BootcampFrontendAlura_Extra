import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import LabelField from '../Label';
import propToStyle from '../../../theme/utils/propToStyle';

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.background.main.color};
  padding: 2px 16px 12px;
  outline: 0;
  ${propToStyle('borderRadius')}
  ${breakpointsMedia({
    xs: css`
      margin-bottom: 16px;
    `,
    md: css`
      margin-bottom: 32px;
    `,
  })};
  background-color: ${(props) => (props.checked ? 'rgb(123 186 159 / 48%)' : '#ffffff')};
  width: 100%;
  max-width: 120px;
  align-items: center;
  flex-shrink: 2;
`;

const Radio = styled.input`
  margin: 0;
  padding: 0;
  appearance: none;
`;

const LabelImg = styled(LabelField)`
  display: flex;
  flex-direction: column;
  .money {
    background-image: url('/icons/money.png');
  }
  .card {
    background-image: url('/icons/card.png');
  }
  .paypal {
    background-image: url('/icons/paypal.png');
  }
  input[type='radio'] {
    visibility: hidden;
  }
  & > input[type='radio']:active + .image {
    opacity: 0.9;
  }
  & > input[type='radio']:checked + .image {
    filter: none;
  }
`;

const ContainerImg = styled.div`
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  width: 40px;
  height: 45px;
  transition: all 100ms ease-in;
  filter: brightness(1.8) grayscale(1) opacity(0.7);
  align-self: center;

  &:hover {
    filter: brightness(1.2) grayscale(0.5) opacity(0.9);
  }
`;

export default function RadioField({
  id,
  name,
  onChange,
  value,
  labelName,
  className,
  ...props
}) {
  return (
    <RadioWrapper {...props}>
      <LabelImg htmlFor={id} variant="radioLabel">
        <Radio
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          required
          type="radio"
          {...props}
        />
        <ContainerImg className={`image ${className}`} />
        {labelName}
      </LabelImg>
    </RadioWrapper>
  );
}

RadioField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
