import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import {Picker} from '@react-native-picker/picker';
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

  return (
    <View style={[styles.container, isSmallScreen && styles.containerStacked]}>
      <View style={styles.filterItem}>
        <Text style={styles.label}>Rating</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedRating}
            onValueChange={setSelectedRating}
            style={styles.picker}>
            <Picker.Item label="All" value={0} />
            <Picker.Item label="3+" value={3} />
            <Picker.Item label="4+" value={4} />
            <Picker.Item label="4.5+" value={4.5} />
          </Picker>
        </View>
      </View>

      <View style={styles.filterItem}>
        <Text style={styles.label}>Price</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedPrice}
            onValueChange={setSelectedPrice}
            style={styles.picker}>
            <Picker.Item label="All" value="all" />
            <Picker.Item label="0 - 50" value="0-50" />
            <Picker.Item label="50 - 100" value="50-100" />
            <Picker.Item label="100+" value="100+" />
          </Picker>
        </View>
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
  pickerWrapper: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: moderateScale(8),
    overflow: 'hidden',
    backgroundColor: colors.pickerBgColor,
    height: verticalScale(44),
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
  },
});

export default FilterBar;
