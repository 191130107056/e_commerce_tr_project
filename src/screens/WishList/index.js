import {View, Text, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import ProductCard from '../../components/ProductCard';
import {NavScreen} from '../../constants/constant';
import styles from './styles';

const WishListScreen = ({navigation}) => {
  const wishlist = useSelector(state => state.wishlist);

  const renderItem = useCallback(
    ({item}) => (
      <ProductCard
        product={item}
        onPress={() =>
          navigation.navigate(NavScreen.ProductDetail, {product: item})
        }
      />
    ),
    [navigation],
  );

  if (wishlist.length === 0) {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Wish List is empty.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={wishlist}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.contentContainerStyle}
      maxToRenderPerBatch={10}
      initialNumToRender={10}
      removeClippedSubviews={true}
      windowSize={5}
      updateCellsBatchingPeriod={50}
      getItemLayout={(data, index) => ({
        length: 120,
        offset: 120 * index,
        index,
      })}
    />
  );
};

export default WishListScreen;
