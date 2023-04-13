import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled(TextInput)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray500};
    color: ${theme.colors.gray100};

    min-height: ${theme.sizeIcon.lg.responsive}px;

    padding-left: ${theme.spacing.xm.responsive}px;

    font-size: ${theme.typography.fontSize.md.responsive}px;
    font-family: ${theme.fonts.regular};
    line-height: ${theme.typography.lineHeight.lg.responsive}px;
  `}
  flex: 1;
  width: 100%;
  border-radius: ${RFValue(6)}px;
  justify-content: center;
`;
