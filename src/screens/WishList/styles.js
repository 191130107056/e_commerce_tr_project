import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../theme/dimen';
import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: moderateScale(10),
    paddingBottom: verticalScale(50),
  },
  itemContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: scale(16), color: colors.emptyTextColor},
});
export default styles;
