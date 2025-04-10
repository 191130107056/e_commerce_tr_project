import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../theme/dimen';
import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(16),
    backgroundColor: colors.productDetailsBgContainer,
  },
  imageCard: {
    backgroundColor: colors.white,
    padding: moderateScale(12),
    borderRadius: moderateScale(12),
    alignItems: 'center',
    elevation: 4,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: verticalScale(16),
  },
  productImage: {
    width: '100%',
    height: verticalScale(220),
    resizeMode: 'contain',
  },
  title: {
    fontSize: scale(20),
    fontWeight: 'bold',
    color: colors.detailsTextColor,
    marginBottom: verticalScale(4),
  },
  price: {
    fontSize: scale(18),
    fontWeight: '600',
    color: colors.success,
    marginBottom: verticalScale(8),
  },
  description: {
    fontSize: scale(15),
    color: colors.detailsDescriptionColor,
    marginBottom: verticalScale(16),
    lineHeight: verticalScale(22),
  },
  wishlistBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.retryBtnColor,
    padding: moderateScale(10),
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    marginBottom: verticalScale(20),
  },
  removeBtn: {
    backgroundColor: colors.error,
  },
  wishlistText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: scale(16),
    marginLeft: moderateScale(8),
  },
  formTitle: {
    fontSize: scale(18),
    fontWeight: '600',
    marginBottom: 12,
    color: colors.formTitleColor,
  },
  inputContainer: {
    marginBottom: verticalScale(14),
  },
  input: {
    borderWidth: 1,
    borderRadius: moderateScale(8),
    padding: moderateScale(12),
    fontSize: scale(16),
    backgroundColor: colors.containerBgColor,
    color: colors.formTitleColor,
    borderColor: colors.formInputBorderColor,
  },
  inputError: {
    borderColor: colors.error,
  },
  messageInput: {
    height: verticalScale(100),
    textAlignVertical: 'top',
  },
  errorText: {
    color: colors.error,
    fontSize: scale(12),
    marginTop: verticalScale(4),
    marginLeft: moderateScale(4),
  },
  submitButton: {
    backgroundColor: colors.success,
    borderRadius: moderateScale(8),
    paddingVertical: verticalScale(14),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(40),
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: colors.white,
    fontSize: scale(16),
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(12),
  },
  ratingText: {
    fontSize: scale(13),
    color: colors.subTitleColor,
    marginLeft: moderateScale(6),
  },
});
export default styles;
