import { ViewProps } from 'react-native';

export interface TaskCardProps extends ViewProps {
  label: string;
  selected: boolean;
  onPress: () => void;
  onRemove: () => void;
}

export interface TaskCardStyleProps {
  selected: boolean;
}
