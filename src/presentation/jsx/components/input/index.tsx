import React from 'react';
import { useTheme } from 'styled-components/native';
import { InputComponentProps } from './props';
import { Container } from './styles';

export const InputComponent: React.FC<InputComponentProps> = ({
  inputRef,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <Container
      ref={inputRef}
      {...rest}
      placeholderTextColor={colors.gray300}
    />
  );
};
