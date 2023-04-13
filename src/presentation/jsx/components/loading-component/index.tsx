import React from 'react';
import { ActivityIndicator } from 'react-native';
import theme from '../../../../common/theme/theme';

export function LoadingComponent() {
  return (
    <ActivityIndicator
      color={theme.colors.blue}
      size={'large'}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    />
  );
}
