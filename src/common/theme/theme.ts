import { PixelRatio } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default {
  colors: {
    purple: '#8284FA',
    purpleDark: '#5E60CE',

    blue: '#4EA8DE',
    blueDark: '#1E6F9F',

    gray100: '#F2F2F2',
    gray200: '#D9D9D9',
    gray300: '#808080',
    gray400: '#333333',
    gray500: '#262626',
    gray600: '#1A1A1A',
    gray700: '#0D0D0D',

    danger: '#E25858',
  },

  fonts: {
    regular: 'Inter_400Regular',
    bold: 'Inter_700Bold',
  },

  typography: {
    fontSize: {
      xl: {
        absolute: PixelRatio.getFontScale() * 24,
        responsive: RFValue(PixelRatio.getFontScale() * 24),
      },
      lg: {
        absolute: PixelRatio.getFontScale() * 18,
        responsive: RFValue(PixelRatio.getFontScale() * 18),
      },
      md: {
        absolute: PixelRatio.getFontScale() * 16,
        responsive: RFValue(PixelRatio.getFontScale() * 16),
      },
      sm: {
        absolute: PixelRatio.getFontScale() * 14,
        responsive: RFValue(PixelRatio.getFontScale() * 14),
      },
    },
    lineHeight: {
      xl: {
        absolute: PixelRatio.getFontScale() * 28,
        responsive: RFValue(PixelRatio.getFontScale() * 28),
      },
      lg: {
        absolute: PixelRatio.getFontScale() * 22,
        responsive: RFValue(PixelRatio.getFontScale() * 22),
      },
      md: {
        absolute: PixelRatio.getFontScale() * 20,
        responsive: RFValue(PixelRatio.getFontScale() * 20),
      },
      sm: {
        absolute: PixelRatio.getFontScale() * 18,
        responsive: RFValue(PixelRatio.getFontScale() * 18),
      },
    },
  },
  sizeIcon: {
    xxl: {
      absolute: PixelRatio.getFontScale() * 72,
      responsive: RFValue(PixelRatio.getFontScale() * 72),
    },
    xl: {
      absolute: PixelRatio.getFontScale() * 56,
      responsive: RFValue(PixelRatio.getFontScale() * 56),
    },
    lg: {
      absolute: PixelRatio.getFontScale() * 52,
      responsive: RFValue(PixelRatio.getFontScale() * 52),
    },
    xxm: {
      absolute: PixelRatio.getFontScale() * 48,
      responsive: RFValue(PixelRatio.getFontScale() * 48),
    },
    xm: {
      absolute: PixelRatio.getFontScale() * 40,
      responsive: RFValue(PixelRatio.getFontScale() * 40),
    },
    md: {
      absolute: PixelRatio.getFontScale() * 32,
      responsive: RFValue(PixelRatio.getFontScale() * 32),
    },
    sm: {
      absolute: PixelRatio.getFontScale() * 24,
      responsive: RFValue(PixelRatio.getFontScale() * 24),
    },
    xs: {
      absolute: PixelRatio.getFontScale() * 16,
      responsive: RFValue(PixelRatio.getFontScale() * 16),
    },
    xxs: {
      absolute: PixelRatio.getFontScale() * 8,
      responsive: RFValue(PixelRatio.getFontScale() * 8),
    },
  },
  spacing: {
    xxl: {
      absolute: 48,
      responsive: RFValue(48),
    },
    xl: {
      absolute: 32,
      responsive: RFValue(32),
    },

    lg: {
      absolute: 24,
      responsive: RFValue(24),
    },
    xxm: {
      absolute: 20,
      responsive: RFValue(20),
    },
    xm: {
      absolute: 16,
      responsive: RFValue(16),
    },
    md: {
      absolute: 12,
      responsive: RFValue(12),
    },
    sm: {
      absolute: 8,
      responsive: RFValue(8),
    },
    xs: {
      absolute: 4,
      responsive: RFValue(4),
    },
    xxs: {
      absolute: 2,
      responsive: RFValue(2),
    },
  },
};
