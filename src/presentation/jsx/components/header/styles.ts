import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView).attrs({ edges: ['top'] })`
  width: 100%;
  min-height: ${RFValue(173)}px;
  background: ${({ theme }) => theme.colors.gray700};
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Image)`
  width: ${RFValue(110)}px;
  height: ${RFValue(32)}px;
`;
