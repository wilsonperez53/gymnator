import styled from '@emotion/native';
import Theme from '../../../models/Theme';

const BlueBackground = styled.View<{
  height: string;
  round?: boolean;
  theme?: Theme;
}>`
  height: ${props => props.height};
  width: 100%;
  background-color: ${props => props.theme.blue};
  border-radius: ${props => props.round && '0 0 80px 0'};
`;

export default BlueBackground;
