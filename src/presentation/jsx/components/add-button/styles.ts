import { TouchableOpacity, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import PlusIcon from '@/assets/svg/plus.svg';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    background-color: ${theme.colors.blueDark};
    width: ${theme.sizeIcon.lg.responsive}px;
    height: ${theme.sizeIcon.lg.responsive}px;
    align-items: center;
    justify-content: center;
  `}
  border-radius: ${RFValue(6)}px;
`;

export const Icon = styled(PlusIcon).attrs(({ theme }) => ({
  width: theme.sizeIcon.xs.responsive,
  height: theme.sizeIcon.xs.responsive,
}))``;
