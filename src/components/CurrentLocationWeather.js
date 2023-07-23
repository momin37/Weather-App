import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Colors} from '../utils';
import {Image, Text} from '@rneui/themed';

const CurrentLocationWeather = props => {
  const {currentLocationWeather, detailedInfoModalRef} = props;

  return (
    <TouchableOpacity
      onPress={() => {
        detailedInfoModalRef.current.openModal(true, currentLocationWeather);
      }}
      style={styles.container}>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.locationTitle}>My Location</Text>
          <Text style={styles.locationName}>
            {currentLocationWeather?.location?.name}
          </Text>
        </View>
        <Text style={styles.temperature}>
          {currentLocationWeather?.current?.temp_c}
          {'\u00b0C'}
        </Text>
      </View>
      <View style={styles.weatherInfo}>
        <Text style={styles.conditionText}>
          {currentLocationWeather?.current?.condition?.text}
        </Text>
        <Image
          source={{
            uri: `https:${currentLocationWeather?.current?.condition?.icon}`,
          }}
          style={styles.conditionIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(86),
    height: wp(25),
    borderRadius: wp(3),
    marginBottom: wp(10),
    paddingHorizontal: wp(4),
    paddingVertical: wp(2),
    backgroundColor: Colors.white,
    elevation: 0.5,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  locationTitle: {
    fontSize: wp(5),
    fontWeight: '600',
    color: Colors.black,
  },
  locationName: {
    fontSize: wp(3.35),
    fontWeight: '400',
    color: Colors.black,
    lineHeight: wp(3.5),
  },
  temperature: {
    fontSize: wp(8),
    fontWeight: '600',
    color: Colors.black,
  },
  weatherInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  conditionText: {
    fontSize: wp(4),
    fontWeight: '400',
    color: Colors.black,
  },
  conditionIcon: {
    resizeMode: 'contain',
    height: wp(9),
    width: wp(9),
  },
});

export default CurrentLocationWeather;
