import React from 'react';
import { Container, Logo } from './styles';
import LogoIcon from '@/assets/png/logo.png';

export function HeaderComponent() {
  return (
    <Container>
      <Logo source={LogoIcon} />
    </Container>
  );
}
