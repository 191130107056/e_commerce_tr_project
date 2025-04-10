import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import styles from './styles';
import {addToWishlist, removeFromWishlist} from '../../redux/wishlistSlice';

const ProductDetailScreen = ({route}) => {
  const {product} = route.params;
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist);
  const isWished = wishlist.find(item => item.id === product.id);

  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    message: yup
      .string()
      .required('Message is required')
      .min(10, 'Message must be at least 10 characters'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      message: '',
    },
  });

  const onSubmit = data => {
    Alert.alert('Inquiry Sent', 'We will contact you soon.');
    reset();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageCard}>
        <Image source={{uri: product.image}} style={styles.productImage} />
      </View>

      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      {product.rating?.rate && (
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, i) => {
            const filled = i < Math.floor(product.rating.rate);
            const half =
              product.rating.rate - i >= 0.5 && product.rating.rate - i < 1;
            return (
              <Icon
                key={i}
                name={filled ? 'star' : half ? 'star-half' : 'star-outline'}
                size={16}
                color="#ffa41c"
                style={{marginRight: 2}}
              />
            );
          })}
          <Text style={styles.ratingText}>
            ({product.rating.count} ratings)
          </Text>
        </View>
      )}
      <Text style={styles.description}>{product.description}</Text>

      <TouchableOpacity
        style={[styles.wishlistBtn, isWished && styles.removeBtn]}
        onPress={() =>
          isWished
            ? dispatch(removeFromWishlist(product.id))
            : dispatch(addToWishlist(product))
        }>
        <Icon
          name={isWished ? 'heart-dislike' : 'heart'}
          size={20}
          color="#fff"
        />
        <Text style={styles.wishlistText}>
          {isWished ? 'Remove from Wish List' : 'Add to Wish List'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.formTitle}>Send an Inquiry</Text>

      <Controller
        control={control}
        name="name"
        render={({field: {onChange, value}}) => (
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Your Name"
              value={value}
              onChangeText={onChange}
              style={[styles.input, errors.name && styles.inputError]}
            />
            {errors.name && (
              <Text style={styles.errorText}>{errors.name.message}</Text>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name="message"
        render={({field: {onChange, value}}) => (
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Your Message"
              value={value}
              onChangeText={onChange}
              style={[
                styles.input,
                styles.messageInput,
                errors.message && styles.inputError,
              ]}
              multiline
            />
            {errors.message && (
              <Text style={styles.errorText}>{errors.message.message}</Text>
            )}
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Send Inquiry</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductDetailScreen;
