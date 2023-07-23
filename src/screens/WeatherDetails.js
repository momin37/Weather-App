import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import React, {useRef, useState} from 'react';
import {Header, Text, Image} from '@rneui/themed';
import {Colors} from '../utils';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AdditionalWeatherInfo from '../components/AdditionalWeatherInfo';
import SettingModal from '../components/SettingModal';
import WeatherInfo from '../components/WeatherInfo';

// import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

const WeatherDetails = ({route}) => {
  const {current, forecast, location} = route.params.weatherData;

  const settingModalRef = useRef();

  const [tempInCel, setTempInCel] = useState(true);
  const [windInKPH, setWindInKPH] = useState(true);
  const [rainInIN, setRainInIN] = useState(true);
  const [visibilityInKM, setVisibilityInKM] = useState(true);

  // const navigation = useNavigation();
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header
        // leftComponent={
        //   <View>
        //     <TouchableOpacity
        //       onPress={() => {
        //         navigation.goBack();
        //       }}>
        //       <Icon name="arrow-back" size={22} color={Colors.white} />
        //     </TouchableOpacity>
        //   </View>
        // }
        centerComponent={{text: 'Weather Detail', style: styles.heading}}
        rightComponent={
          <View>
            <TouchableOpacity
              style={styles.clickButton}
              onPress={() => {
                settingModalRef.current.openModal(true);
              }}>
              <Icon name="settings-outline" size={22} color={Colors.white} />
            </TouchableOpacity>
          </View>
        }
      />

      <WeatherInfo
        cityName={location.name}
        temperature={
          tempInCel ? `${current.temp_c}\u00b0` : `${current.temp_f}\u00B0F `
        }
        imageUri={`https:${current.condition.icon}`}
        weatherCondition={current.condition.text}
      />

      <View style={styles.forcastContainer}>
        <Text style={styles.forcastText}>5-DAY FORECAST</Text>
        {forecast.forecastday.map((item, index) => {
          // Create a new Date object using the timestamp
          const dateObject = new Date(item.date);

          // Get the day of the week (0: Sunday, 1: Monday, ..., 6: Saturday)
          const dayOfWeek = dateObject.getDay();

          return (
            <View key={index} style={styles.forcastItem}>
              <Text style={styles.dayText}>
                {index === 0 ? 'Today' : dayNames[dayOfWeek]}
              </Text>
              <View style={styles.weatherContainer}>
                <Image
                  source={{uri: `https:${item.day.condition.icon}`}}
                  style={styles.weatherIcon}
                />
                <Text style={styles.weatherText}>
                  {item.day.condition.text}
                </Text>
              </View>

              <Text style={styles.tempText}>
                {tempInCel
                  ? `${item.day.maxtemp_c}\u00b0`
                  : `${item.day.maxtemp_f}\u00B0F `}{' '}
                |{' '}
                {tempInCel
                  ? `${item.day.mintemp_c}\u00b0`
                  : `${item.day.mintemp_f}\u00B0F `}
              </Text>
            </View>
          );
        })}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Additional Information</Text>
        <AdditionalWeatherInfo title={'UV Index'} value={`${current.uv}`} />
        <AdditionalWeatherInfo
          title={'Wind Speed'}
          value={
            windInKPH ? `${current.wind_kph} kph` : `${current.wind_mph} mph`
          }
        />
        <AdditionalWeatherInfo
          title={'Wind Direction'}
          value={`${current.wind_dir}`}
        />
        <AdditionalWeatherInfo
          title={'RainFall'}
          value={
            rainInIN ? `${current.precip_mm} mm` : `${current.precip_in} in`
          }
        />
        <AdditionalWeatherInfo
          title={'Feels Like'}
          value={
            tempInCel
              ? `${current.feelslike_c}\u00b0`
              : `${current.feelslike_f}\u00B0F`
          }
        />
        <AdditionalWeatherInfo
          title={'Humidity'}
          value={`${current.humidity}%`}
        />
        <AdditionalWeatherInfo
          title={'Visibility'}
          value={
            visibilityInKM
              ? `${current.vis_km} km`
              : `${current.vis_miles} miles`
          }
        />
        <AdditionalWeatherInfo
          title={'Pressure'}
          value={`${current.pressure_mb} mb`}
        />
      </View>

      <SettingModal
        tempInCel={!tempInCel}
        setTempInCel={setTempInCel}
        visibilityInKM={!visibilityInKM}
        setVisibilityInKM={setVisibilityInKM}
        windInKPH={!windInKPH}
        setWindInKPH={setWindInKPH}
        rainInIN={!rainInIN}
        setRainInIN={setRainInIN}
        ref={settingModalRef}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  arrowBackIcon: {
    marginLeft: 3,
  },
  clickButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  clickButtonText: {
    fontSize: wp(4),
    fontWeight: '600',
    color: Colors.white,
  },
  dayText: {
    fontSize: wp(4),
    fontWeight: '600',
    color: Colors.gray,
    textAlign: 'left',
    flex: 1,
  },
  weatherContainer: {
    alignItems: 'center',
    marginTop: wp(-3),
    flex: 1,
  },
  weatherIcon: {
    height: wp(10),
    width: wp(10),
    resizeMode: 'contain',
  },
  weatherText: {
    fontSize: wp(2.8),
    fontWeight: '600',
    color: Colors.gray,
    textAlign: 'center',
  },
  tempText: {
    fontSize: wp(4),
    fontWeight: '600',
    color: Colors.gray,
    textAlign: 'right',
    flex: 1,
  },
  forcastText: {
    fontSize: wp(3.75),
    fontWeight: '400',
    color: Colors.black,
    marginVertical: wp(3),
    paddingHorizontal: wp(3),
  },
  forcastContainer: {
    margin: wp(3),
    backgroundColor: Colors.white,
    borderRadius: wp(3),
  },
  forcastItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: wp(0.1),
    borderTopColor: Colors.moreLightGray,
    height: wp(14),
    paddingHorizontal: wp(1.5),
    marginHorizontal: wp(1.5),
    flex: 1,
  },
  infoContainer: {
    marginHorizontal: wp(3),
    backgroundColor: Colors.white,
    marginVertical: wp(3),
    borderRadius: wp(3),
    paddingBottom: wp(1),
  },
  infoText: {
    fontSize: wp(4),
    fontWeight: '600',
    color: Colors.gray,
    textAlign: 'left',
    flex: 1,
    marginVertical: wp(3),
    marginLeft: wp(3),
  },
  // Add more styles here as needed
});

export default WeatherDetails;
