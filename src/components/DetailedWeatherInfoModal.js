import {View, Text, StyleSheet} from 'react-native';

import Modal from 'react-native-modal';

import React, {forwardRef, useImperativeHandle, useState} from 'react';
import WeatherInfo from './WeatherInfo';
import {Colors} from '../utils';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AdditionalWeatherInfo from './AdditionalWeatherInfo';

const DetailedWeatherInfoModal = (props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  const [modalData, setModalData] = useState({});

  useImperativeHandle(ref, () => ({
    openModal: (value, data) => {
      setIsVisible(value);
      setModalData(data);
    },
  }));

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <Modal
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      isVisible={isVisible}>
      <View style={styles.modalContainer}>
        <WeatherInfo
          cityName={modalData?.location?.name}
          temperature={`${modalData?.current?.temp_c}\u00b0`}
          imageUri={`https:${modalData?.current?.condition?.icon}`}
          weatherCondition={modalData?.current?.condition?.text}
        />

        <View style={styles.additionalInfoContainer}>
          <Text style={styles.additionalInfoText}>Additional Information</Text>
          <AdditionalWeatherInfo
            title={'UV Index'}
            value={`${modalData?.current?.uv}`}
          />
          <AdditionalWeatherInfo
            title={'Wind Speed'}
            value={`${modalData?.current?.wind_kph} kph`}
          />
          <AdditionalWeatherInfo
            title={'Wind Direction'}
            value={`${modalData?.current?.wind_dir}`}
          />
          <AdditionalWeatherInfo
            title={'RainFall'}
            value={`${modalData?.current?.precip_mm} mm`}
          />
          <AdditionalWeatherInfo
            title={'Feels Like'}
            value={`${modalData?.current?.feelslike_c}\u00b0`}
          />
          <AdditionalWeatherInfo
            title={'Humidity'}
            value={`${modalData?.current?.humidity}%`}
          />
          <AdditionalWeatherInfo
            title={'Visibility'}
            value={`${modalData?.current?.vis_km} km`}
          />
          <AdditionalWeatherInfo
            title={'Pressure'}
            value={`${modalData?.current?.pressure_mb} mb`}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    borderRadius: wp(2),
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
  },
  additionalInfoText: {
    fontSize: wp(4),
    fontWeight: '600',
    color: Colors.gray,
    marginVertical: wp(3),
    marginLeft: wp(3),
  },
  additionalInfoContainer: {
    marginHorizontal: wp(3),
    backgroundColor: Colors.white,
    marginVertical: wp(3),
    borderRadius: wp(3),
    paddingBottom: wp(1),
  },
});

export default forwardRef(DetailedWeatherInfoModal);
