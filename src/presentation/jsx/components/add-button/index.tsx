import React from 'react';
import { AddButtonProps } from './props';
import { Container, Icon } from './styles';

export const AddButtonComponent: React.FC<AddButtonProps> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <Icon />
    </Container>
  );
};
