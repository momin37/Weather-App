import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import {
  Header,
  Input,
  Button,
  Skeleton,
  Text,
  Icon,
  Image,
  Switch,
} from '@rneui/themed';

import {Colors} from '../utils';

const SettingModal = (props, ref) => {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: value => {
      setIsSettingsVisible(value);
    },
  }));

  const SettingInfo = ({
    title,
    firstUnit,
    secondUnit,
    initialValue,
    onChange,
  }) => {
    const [checked, setChecked] = useState(initialValue);

    const handleToggle = value => {
      setChecked(value);
      onChange(!value);
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.unitContainer}>
          <Text style={styles.unit}>{firstUnit}</Text>
          <Switch
            style={styles.switch}
            value={checked}
            onValueChange={handleToggle}
          />
          <Text style={styles.unit}>{secondUnit}</Text>
        </View>
      </View>
    );
  };

  const closeModal = () => {
    setIsSettingsVisible(false);
  };

  return (
    <Modal
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      backdropColor="transparent"
      isVisible={isSettingsVisible}
      hasBackdrop={true}
      animationIn="fadeIn"
      animationOut="fadeOut"
      transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <SettingInfo
            title={'Temperature'}
            firstUnit={'\u00b0C'}
            secondUnit={'\u00B0F'}
            initialValue={props.tempInCel}
            onChange={value => props.setTempInCel(value)}
          />

          <SettingInfo
            title={'Wind'}
            firstUnit={'KPH'}
            secondUnit={'MPH'}
            initialValue={props.windInKPH}
            onChange={value => props.setWindInKPH(value)}
          />

          <SettingInfo
            title={'Rain'}
            firstUnit={'MM'}
            secondUnit={'IN'}
            initialValue={props.rainInIN}
            onChange={value => props.setRainInIN(value)}
          />
          <SettingInfo
            title={'Visibility'}
            firstUnit={'KM'}
            secondUnit={'Miles'}
            initialValue={props.visibilityInKM}
            onChange={value => props.setVisibilityInKM(value)}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    top: wp(6),
    right: wp(4),
    width: wp(70),
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: wp(3.75),
    fontWeight: '600',
    color: Colors.black,
    marginLeft: wp(1),
    flex: 1,
  },
  unitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  unit: {
    fontSize: wp(3.75),
    fontWeight: '600',
    color: Colors.black,
    marginLeft: wp(1),
    flex: 1,
  },
  switch: {
    flex: 1,
  },
});

export default forwardRef(SettingModal);
