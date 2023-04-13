import { View, Text } from 'react-native';
import styled, { css } from 'styled-components/native';

import EmptyIcon from '@/assets/svg/clipboard.svg';

export const Container = styled(View)`
  width: 100%;

  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray400};

  padding-top: ${({ theme }) => theme.spacing.xxl.responsive}px;

  align-items: center;
`;

export const Icon = styled(EmptyIcon)`
  ${({ theme }) => css`
    width: ${theme.sizeIcon.xl.responsive}px;
    height: ${theme.sizeIcon.xl.responsive}px;
    margin-bottom: ${theme.spacing.xm.responsive}px;
  `}
`;

export const Title = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.sm.responsive}px;
    line-height: ${theme.typography.lineHeight.md.responsive}px;

    font-family: ${theme.fonts.bold};
    color: ${theme.colors.gray300};
  `}
`;

export const Description = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize.sm.responsive}px;
    line-height: ${theme.typography.lineHeight.md.responsive}px;

    font-family: ${theme.fonts.regular};
    color: ${theme.colors.gray300};
  `}
`;
