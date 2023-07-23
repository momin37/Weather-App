import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Colors} from '../utils';

const AdditionalWeatherInfo = props => {
  const {title, value} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: wp(13),
    backgroundColor: Colors.white,
    paddingHorizontal: wp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: wp(0.1),
    borderTopColor: Colors.moreLightGray,
    marginHorizontal: wp(2),
  },

  title: {
    fontSize: wp(3.75),
    fontWeight: '400',
    color: Colors.black,
    alignSelf: 'center',
  },
  value: {
    fontSize: wp(3.75),
    fontWeight: '400',
    color: Colors.black,
    alignSelf: 'center',
  },
});

export default AdditionalWeatherInfo;
