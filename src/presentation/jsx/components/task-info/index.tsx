import React from 'react';
import { Container, CountContainer, CountLabel, Label } from './styles';
import { TaskInfoProps } from './props';

export const TaskInfoComponent: React.FC<TaskInfoProps> = ({
  label,
  countLabel,
  type = 'primary',
}) => {
  return (
    <Container>
      <Label type={type}>{label}</Label>

      <CountContainer>
        <CountLabel>{countLabel}</CountLabel>
      </CountContainer>
    </Container>
  );
};
