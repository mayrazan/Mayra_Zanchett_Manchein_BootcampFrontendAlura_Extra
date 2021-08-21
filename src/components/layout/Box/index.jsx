import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('alignContent')}
  ${propToStyle('alignSelf')}
  ${propToStyle('alignItems')}
  ${propToStyle('background')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundSize')}
  ${propToStyle('boxShadow')}
  ${propToStyle('color')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('flexGrow')}
  ${propToStyle('flexFlow')}
  ${propToStyle('gap')}
  ${propToStyle('height')}
  ${propToStyle('justifyContent')}
  ${propToStyle('margin')}
  ${propToStyle('minWidth')}
  ${propToStyle('minHeight')}
  ${propToStyle('padding')}
  ${propToStyle('paddingBottom')}
  ${propToStyle('transform')}
  ${propToStyle('width')}
`;

export default Box;
