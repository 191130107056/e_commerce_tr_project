import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {addToWishlist, removeFromWishlist} from '../redux/wishlistSlice';
import {colors} from '../theme/colors';
import {moderateScale, scale, verticalScale} from '../theme/dimen';

const ProductCard = ({product, onPress}) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist);
  const isWished = wishlist.find(item => item.id === product.id);

  const toggleWishlist = () => {
    isWished
      ? dispatch(removeFromWishlist(product.id))
      : dispatch(addToWishlist(product));
  };

  const renderRating = (rate, count) => {
    const stars = [];
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Icon
          key={`star-${i}`}
          name="star"
          size={moderateScale(16)}
          color={colors.starColor}
        />,
      );
    }

    if (hasHalfStar && stars.length < 5) {
      stars.push(
        <Icon
          key="half"
          name="star-half"
          size={moderateScale(16)}
          color={colors.starColor}
        />,
      );
    }

    while (stars.length < 5) {
      stars.push(
        <Icon
          key={`empty-${stars.length}`}
          name="star-border"
          size={moderateScale(16)}
          color={colors.starColor}
        />,
      );
    }

    return (
      <View style={styles.ratingContainer}>
        <View style={styles.starsRow}>{stars}</View>
        <Text style={styles.ratingCount}>({count})</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{uri: product.image}} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>

        {product.rating?.rate &&
          renderRating(product.rating.rate, product.rating.count)}

        <Text style={styles.price}>${product.price.toFixed(2)}</Text>

        <TouchableOpacity onPress={toggleWishlist} style={styles.iconWrapper}>
          <Icon
            name={isWished ? 'favorite' : 'favorite-border'}
            size={24}
            color={isWished ? colors.error : colors.subTitleColor}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ProductCard);
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginHorizontal: moderateScale(12),
    marginVertical: verticalScale(8),
    padding: moderateScale(12),
    borderRadius: moderateScale(12),
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.25,
    shadowRadius: 4,
    alignItems: 'center',
  },
  image: {
    width: moderateScale(100),
    height: moderateScale(100),
    resizeMode: 'contain',
    backgroundColor: colors.containerBgColor,
    borderRadius: moderateScale(8),
  },
  details: {
    flex: 1,
    marginLeft: moderateScale(12),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: scale(16),
    color: colors.titleColor,
    fontWeight: '500',
    marginBottom: verticalScale(4),
  },
  price: {
    fontSize: scale(15),
    fontWeight: 'bold',
    color: colors.success,
    marginBottom: verticalScale(10),
  },
  iconWrapper: {
    alignSelf: 'flex-start',
    padding: moderateScale(4),
    borderRadius: moderateScale(4),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(6),
  },
  starsRow: {
    flexDirection: 'row',
    marginRight: moderateScale(4),
  },
  ratingCount: {
    fontSize: scale(13),
    color: colors.subTitleColor,
  },
});
