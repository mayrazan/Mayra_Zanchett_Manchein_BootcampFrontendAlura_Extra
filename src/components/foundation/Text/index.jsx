import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

// eslint-disable-next-line consistent-return
export const TextStyleVariants = (name) => {
  if (name) {
    return css`
      ${({ theme }) => css`
        font-size: ${theme.typographyFonts[name].fontSize};
        font-weight: ${theme.typographyFonts[name].fontWeight};
        line-height: ${theme.typographyFonts[name].lineHeight};
        font-family: ${name === 'title' || name === 'titleSM'
    ? theme.typographyFonts[name].fontFamily
    : 'Roboto'};
      `}
    `;
  }
};

const TextBase = styled.span`
  ${propToStyle('textAlign')}
  ${propToStyle('margin')}
  ${propToStyle('flexGrow')}
  ${propToStyle('padding')}
  color: ${({ theme, color }) => color && theme.colors.primary.main[color]};
  ${({ variant }) => {
    if (typeof variant === 'string') {
      return TextStyleVariants(variant);
    }
    return breakpointsMedia({
      xs: css`
        ${TextStyleVariants(variant.xs)}
      `,
      md: css`
        ${TextStyleVariants(variant.md)}
      `,
    });
  }}
`;

export default function Text({
  variant, children, tag, color, ...props
}) {
  return (
    <TextBase as={tag} variant={variant} color={color} {...props}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'label',
  color: '#000000',
};
