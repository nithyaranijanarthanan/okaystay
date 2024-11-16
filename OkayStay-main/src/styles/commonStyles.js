import {StyleSheet} from 'react-native';
import {mvs, s} from 'react-native-size-matters';
import {COLORS, SIZES} from '../constants';

export const commonStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyEvenly: {
    justifyContent: 'space-evenly',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  itemsEnd: {
    alignItems: 'flex-end',
  },
  flex1: {
    flex: 1,
  },
  gap: {
    gap: s(SIZES.font),
  },
  gapSm: {
    gap: s(SIZES.base / 2),
  },
  paddingHorizontal: {
    paddingHorizontal: s(SIZES.padding),
  },
  textCenter: {
    textAlign: 'center',
  },
  bgRed: {
    backgroundColor: 'red',
  },
  bgWhite: {
    backgroundColor: COLORS.white,
  },
  hidden: {
    overflow: 'hidden',
  },
  textShadow: {
    textShadowOffset: {
      width: s(1),
      height: s(1),
    },
    textShadowRadius: mvs(2),
    textShadowColor: '#333',
  },
});
