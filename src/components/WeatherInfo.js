import {Text, Image} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Colors} from '../utils';

const WeatherInfo = props => {
  const {cityName, temperature, imageUri, weatherCondition} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{cityName}</Text>
      <Text style={styles.temperature}>{temperature}</Text>
      <Image source={{uri: imageUri}} style={styles.image} />

      <Text style={styles.weatherCondition}>{weatherCondition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: wp(4),
  },
  cityName: {
    fontSize: wp(6),
    fontWeight: '600',
    color: Colors.gray,
    textAlign: 'center',
  },
  temperature: {
    fontSize: wp(10),
    fontWeight: '600',
    color: Colors.gray,
  },
  image: {
    height: wp(20),
    width: wp(20),
    resizeMode: 'contain',
  },
  weatherCondition: {
    fontSize: wp(4.5),
    fontWeight: '600',
    color: Colors.gray,
    textAlign: 'center',
  },
});

export default WeatherInfo;
