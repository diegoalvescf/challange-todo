import React, { useState } from 'react';
import { RadioButtonProps } from './props';
import { Check, Circle, Container } from './styles';

export const RadioButtonComponent: React.FC<RadioButtonProps> = ({
  onPress,
  ...rest
}) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
    onPress && onPress();
  };

  return (
    <Container
      onPress={handlePress}
      {...rest}
    >
      <Circle selected={selected}>{selected && <Check />}</Circle>
    </Container>
  );
};
