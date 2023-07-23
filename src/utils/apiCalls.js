import axios from 'axios';
import SnackBar from './SnackBar';
import constants from './constants';

const ServerRequest = {
  fetchWeatherDetails: (apiKey, cityName, forcastDays, responseCallback) => {
    if (constants.isInternetConnected) {
      axios
        .get(
          `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=${forcastDays}`,
        )
        .then(function (response) {
          if (response.status === 200) {
            responseCallback(true, response.data);
          }
        })
        .catch(function (error) {
          SnackBar.showErrorMsg('Please enter valid city name', 3000);
          responseCallback(false, null);
        });
    } else {
      SnackBar.showErrorMsg('Please check your internet connection', 3000);
      responseCallback(false, null);
    }
  },

  fetchCurrentLocationWeatherDetails: (
    apiKey,
    latitude,
    longitude,
    responseCallback,
  ) => {
    if (constants.isInternetConnected) {
      axios
        .get(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`,
        )
        .then(function (response) {
          if (response.status === 200) {
            responseCallback(true, response.data);
          }
        })
        .catch(function (error) {
          SnackBar.showErrorMsg('Unable to get location', 3000);
          responseCallback(false, null);
        });
    } else {
      SnackBar.showErrorMsg('Please check your internet connection', 3000);
      responseCallback(false, null);
    }
  },
};

export default ServerRequest;
