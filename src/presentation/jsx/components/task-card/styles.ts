import { TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import Trash from '@/assets/svg/trash.svg';
import { TaskCardStyleProps } from './props';

export const Container = styled(View)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray500};

    border: 1px solid ${theme.colors.gray400};

    padding: ${theme.spacing.md.responsive}px ${theme.spacing.sm.responsive}px
      ${theme.spacing.md.responsive}px ${theme.spacing.sm.responsive}px;
  `}
  width: 100%;
  min-height: ${RFValue(64)}px;

  border-radius: ${RFValue(8)}px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);

  flex-direction: row;

  align-items: center;
`;

export const LabelContainer = styled(View)`
  width: ${RFValue(215)}px;
  min-height: ${RFValue(40)}px;
  justify-content: center;
`;

export const Label = styled.Text<TaskCardStyleProps>`
  ${({ theme, selected }) => css`
    font-size: ${theme.typography.fontSize.sm.responsive}px;
    line-height: ${theme.typography.lineHeight.md.responsive}px;

    font-family: ${theme.fonts.regular};
    color: ${selected ? theme.colors.gray300 : theme.colors.gray100};

    text-decoration: ${selected && `line-through`};
    text-decoration-color: ${selected
      ? theme.colors.gray300
      : theme.colors.gray100};
  `}
`;

export const TrashContainer = styled(TouchableOpacity)`
  margin-right: 10px;
`;

export const TrashIcon = styled(Trash)`
  width: ${RFValue(12.48)}px;
  height: ${RFValue(14)}px;
`;
