import React from 'react';
import {
  Container,
  Label,
  LabelContainer,
  TrashContainer,
  TrashIcon,
} from './styles';
import { TaskCardProps } from './props';
import { RadioButtonComponent } from '../radio-button';

export const TaskCardComponent: React.FC<TaskCardProps> = ({
  label,
  selected,
  onPress,
  onRemove,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <RadioButtonComponent
        selected={selected}
        onPress={onPress}
      />

      <LabelContainer>
        <Label selected={selected}>{label}</Label>
      </LabelContainer>

      <TrashContainer onPress={onRemove}>
        <TrashIcon />
      </TrashContainer>
    </Container>
  );
};
