import {Platform, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../theme/dimen';
import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(24),
    backgroundColor: colors.containerBgColor,
  },
  icon: {
    marginBottom: verticalScale(20),
  },
  title: {
    fontSize: scale(20),
    fontWeight: '600',
    color: colors.titleColor,
    marginBottom: verticalScale(8),
  },
  subtitle: {
    fontSize: scale(14),
    color: colors.subTitleColor,
    textAlign: 'center',
    marginBottom: verticalScale(24),
    paddingHorizontal: moderateScale(20),
  },
  retryButton: {
    backgroundColor: colors.retryBtnColor,
    paddingHorizontal: moderateScale(24),
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(8),
    elevation: Platform.OS === 'android' ? 2 : 0,
  },
  retryText: {
    color: colors.white,
    fontSize: scale(16),
    fontWeight: '500',
  },
});

export default styles;
