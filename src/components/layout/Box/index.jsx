import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('alignSelf')}
  ${propToStyle('alignItems')}
  ${propToStyle('background')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundSize')}
  ${propToStyle('boxShadow')}
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
  ${propToStyle('transform')}
  ${propToStyle('width')}
`;

export default Box;
