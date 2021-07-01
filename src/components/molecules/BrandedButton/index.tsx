import React from 'react';
import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getButtonColor, getTextColor} from '../../../utils/getColors';

export interface BrandedButtonProps {
  color?: string;
  text?: string;
  icon?: string;
  onPress: () => void;
}

const BrandedButton: React.FC<BrandedButtonProps> = ({
  color,
  text,
  icon,
  onPress,
}) => {
  return (
    <StyledButton color={color} onPress={onPress}>
      {icon && <Icon name={icon} size={28} />}
      <StyledText color={color}>{text}</StyledText>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity<{color?: string}>`
  width: 300px;
  background-color: ${props => props.color && getButtonColor(props.color)};
  margin-bottom: 12px;
  padding: 28px 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

const StyledText = styled.Text<{color?: string}>`
  color: ${props => props.color && getTextColor(props.color)};
`;

export default BrandedButton;
