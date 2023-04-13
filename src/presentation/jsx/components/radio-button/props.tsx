import { TouchableOpacityProps } from 'react-native';

export interface RadioButtonProps extends TouchableOpacityProps {
  selected: boolean;
  onPress?: () => void;
}

export interface RadioButtonStyleProps {
  selected: boolean;
}
