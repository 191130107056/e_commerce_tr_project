import React, {useCallback, useEffect, useMemo, useState} from 'react';
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
import SearchBar from '../../components/SearchBar';
import FilterBar from '../../components/FilterBar';
import styles from './styles';

const ProductListScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState('all');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (search) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (selectedRating > 0) {
      filtered = filtered.filter(p => p.rating?.rate >= selectedRating);
    }

    if (selectedPrice !== 'all') {
      filtered = filtered.filter(p => {
        const price = p.price;
        switch (selectedPrice) {
          case '0-50':
            return price >= 0 && price <= 50;
          case '50-100':
            return price > 50 && price <= 100;
          case '100+':
            return price > 100;
          default:
            return true;
        }
      });
    }

    return filtered;
  }, [products, search, selectedRating, selectedPrice]);

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
          style={{marginRight: moderateScale(15)}}>
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
      <SearchBar value={search} onChange={setSearch} />
      <FilterBar
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />
      {filteredProducts.length === 0 ? (
        <View style={styles.emptyView}>
          <Text style={styles.emptyText}>No products found.</Text>
        </View>
      ) : (
        <FlatList
          data={filteredProducts}
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
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default ProductListScreen;
