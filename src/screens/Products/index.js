import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {ApiEndPoint} from '../../constants/constant';
import {NavScreen} from '../../constants/constant';
import api from '../../api/axiosConfig';
import ProductCard from '../../components/ProductCard';
import {colors} from '../../theme/colors';
import {moderateScale} from '../../theme/dimen';
import styles from './styles';

const ProductListScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(ApiEndPoint.getProducts)
      .then(res => {
        setProducts(res.data);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  // Add header icon to navigate to WishList
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate(NavScreen.WishList)}
          style={{marginRight: 15}}>
          <Icon
            name="heart-sharp"
            size={moderateScale(24)}
            color={colors.error}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

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

  if (loading) return <ActivityIndicator size="large" style={{flex: 1}} />;

  return (
    <SafeAreaView style={styles.container}>
      {products.length === 0 ? (
        <View style={styles.emptyView}>
          <Text style={styles.emptyText}>No products found.</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
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
      )}
    </SafeAreaView>
  );
};

export default ProductListScreen;
