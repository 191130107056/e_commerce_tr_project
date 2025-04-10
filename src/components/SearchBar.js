import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../theme/colors';
import {moderateScale, scale, verticalScale} from '../theme/dimen';

const SearchBar = ({value, onChange}) => {
  return (
    <View style={styles.container}>
      <Icon
        name="search"
        size={20}
        color={colors.subTitleColor}
        style={styles.icon}
      />
      <TextInput
        placeholder="Search products"
        placeholderTextColor={colors.subTitleColor}
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(12),
    paddingVertical: verticalScale(8),
    margin: moderateScale(10),
    alignItems: 'center',
    elevation: 2,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  icon: {
    marginRight: moderateScale(8),
  },
  input: {
    flex: 1,
    fontSize: scale(16),
    color: colors.titleColor,
    padding: 0,
  },
});

export default SearchBar;
