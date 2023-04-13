import { TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

export interface AddButtonProps extends TouchableOpacityProps {
  source?: string | React.FC<SvgProps>;
}
