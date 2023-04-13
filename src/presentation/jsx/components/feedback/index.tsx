import React from 'react';
import { Container, Description, Icon, Title } from './styles';
import { FeedbackProps } from './props';

export const FeedbackComponent: React.FC<FeedbackProps> = ({
  title,
  description,
}) => {
  return (
    <Container>
      <Icon />

      <Title>{title}</Title>

      <Description>{description}</Description>
    </Container>
  );
};
