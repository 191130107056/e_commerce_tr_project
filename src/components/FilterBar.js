import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import {moderateScale, scale, verticalScale} from '../theme/dimen';
import {colors} from '../theme/colors';

const FilterBar = ({
  selectedRating,
  setSelectedRating,
  selectedPrice,
  setSelectedPrice,
}) => {
  const {width} = useWindowDimensions();
  const isSmallScreen = width < 380;

  const ratingOptions = [
    {label: 'All', value: 0},
    {label: '3+', value: 3},
    {label: '4+', value: 4},
    {label: '4.5+', value: 4.5},
  ];

  const priceOptions = [
    {label: 'All', value: 'all'},
    {label: '0 - 50', value: '0-50'},
    {label: '50 - 100', value: '50-100'},
    {label: '100+', value: '100+'},
  ];

  return (
    <View style={[styles.container, isSmallScreen && styles.containerStacked]}>
      <View style={styles.filterItem}>
        <Text style={styles.label}>Rating</Text>
        <Dropdown
          data={ratingOptions}
          value={selectedRating}
          onChange={item => setSelectedRating(item.value)}
          labelField="label"
          valueField="value"
          style={styles.dropdown}
          placeholder="Select Rating"
          placeholderStyle={styles.dropdownText}
          selectedTextStyle={styles.dropdownText}
        />
      </View>

      <View style={styles.filterItem}>
        <Text style={styles.label}>Price</Text>
        <Dropdown
          data={priceOptions}
          value={selectedPrice}
          onChange={item => setSelectedPrice(item.value)}
          labelField="label"
          valueField="value"
          style={styles.dropdown}
          placeholder="Select Price"
          placeholderStyle={styles.dropdownText}
          selectedTextStyle={styles.dropdownText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: moderateScale(12),
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    backgroundColor: colors.white,
    elevation: 4,
    justifyContent: 'space-between',
    marginBottom: verticalScale(5),
  },
  containerStacked: {
    flexDirection: 'column',
  },
  filterItem: {
    flex: 1,
    margin: moderateScale(5),
  },
  label: {
    fontSize: scale(14),
    fontWeight: '500',
    marginBottom: verticalScale(6),
    color: colors.titleColor,
  },
  dropdown: {
    height: verticalScale(45),
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(10),
    backgroundColor: colors.pickerBgColor,
  },
  dropdownText: {
    fontSize: scale(14),
    color: colors.titleColor,
  },
});

export default FilterBar;
