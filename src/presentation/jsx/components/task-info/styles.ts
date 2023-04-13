import { Text, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { TaskInfoStyleProps } from './props';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled(Text)<TaskInfoStyleProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.bold};

    font-size: ${theme.typography.fontSize.sm.responsive}px;
    line-height: ${theme.typography.lineHeight.sm.responsive}px;

    color: ${type === 'primary' ? theme.colors.blue : theme.colors.purple};

    margin-right: ${theme.spacing.sm.responsive}px;
  `}
`;

export const CountContainer = styled(View)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray400};

    padding: ${theme.spacing.xxs.responsive}px ${theme.spacing.sm.responsive}px;

    border-radius: 999px;
  `}
  justify-content: center;
  align-items: center;
`;

export const CountLabel = styled(Text)`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};

    font-size: ${theme.typography.fontSize.xl.responsive / 2}px;
    line-height: ${theme.typography.lineHeight.xl.responsive / 2}px;

    color: ${theme.colors.gray200};

    border-bottom-width: 1px;
  `}
`;
