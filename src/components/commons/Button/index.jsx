import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';
import { TextStyleVariants } from '../../foundation/Text';

const ButtonDefault = css`
  background-color: ${({ theme }) => theme.colors.background.main.color};
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 14px 36px;
  opacity: 1;
  ${TextStyleVariants.label}
  ${ButtonDefault}
  ${breakpointsMedia({
    xs: css`
      width: 100%;
      max-width: 375px;
    `,
    md: css`
      width: fit-content;
    `,
  })};
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }
  ${propToStyle('margin')}
  ${propToStyle('display')}
`;

export default Button;
