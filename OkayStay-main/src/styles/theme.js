import {Dimensions} from 'react-native';
import {mvs} from 'react-native-size-matters';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#2C67FF', // Green

  // colors
  black: '#323232',
  white: '#FFFFFF',
  gray: '#787878',
  lightGray: '#c2c2c2',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {
    fontFamily: 'Roboto-Black',
    fontSize: mvs(SIZES.h1),
    lineHeight: mvs(36),
  },
  h2: {
    fontFamily: 'Roboto-Bold',
    fontSize: mvs(SIZES.h2),
    lineHeight: mvs(30),
  },
  h3: {
    fontFamily: 'Roboto-Bold',
    fontSize: mvs(SIZES.h3),
    lineHeight: mvs(22),
  },
  h4: {
    fontFamily: 'Roboto-Bold',
    fontSize: mvs(SIZES.h4),
    lineHeight: mvs(22),
  },
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: mvs(SIZES.body1),
    lineHeight: mvs(36),
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: mvs(SIZES.body2),
    lineHeight: mvs(30),
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: mvs(SIZES.body3),
    lineHeight: mvs(22),
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: mvs(SIZES.body4),
    lineHeight: mvs(22),
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
