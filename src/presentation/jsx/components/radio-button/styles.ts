import CheckIcon from '@/assets/svg/check.svg';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RadioButtonStyleProps } from './props';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

export const Circle = styled.View<RadioButtonStyleProps>`
  height: ${RFValue(17)}px;
  width: ${RFValue(17)}px;
  border-radius: 24px;
  border-width: 2px;
  border-color: ${({ theme, selected }) =>
    selected ? theme.colors.purpleDark : theme.colors.blue};
  justify-content: center;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.sm.responsive}px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.purpleDark : 'transparent'};
`;

export const Check = styled(CheckIcon).attrs(({ theme }) => ({
  width: 10,
  height: 7,
  color: theme.colors.gray100,
}))``;
