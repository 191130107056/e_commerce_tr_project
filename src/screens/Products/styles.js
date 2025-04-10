import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import {moderateScale, scale, verticalScale} from '../../theme/dimen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.productConBgColor,
    paddingBottom: verticalScale(24),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.productConBgColor,
  },
  listContainer: {
    paddingHorizontal: moderateScale(10),
    paddingBottom: verticalScale(50),
  },
  emptyView: {
    flex: 1,
    alignItems: 'center',
    marginTop: verticalScale(40),
  },
  emptyText: {
    fontSize: scale(16),
    color: colors.emptyTextColor,
  },
});

export default styles;
