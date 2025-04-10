import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {moderateScale} from '../../theme/dimen';
import {colors} from '../../theme/colors';
import styles from './styles';

const NoInternetScreen = ({onRetry}) => {
  return (
    <View style={styles.container}>
      <Icon
        name="wifi-off"
        size={moderateScale(80)}
        color={colors.subTitleColor}
        style={styles.icon}
      />
      <Text style={styles.title}>No Internet Connection</Text>
      <Text style={styles.subtitle}>
        Please check your connection and try again.
      </Text>
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoInternetScreen;
