import { View, StyleSheet } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { WEATHER_API_KEY } from "@env";

import {
  SnackBar,
  apiCall,
  requestLocationPermission,
  getCurrentLocation,
  Colors,
  constants,
} from "../utils";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { Header, Input, Button } from "@rneui/themed";
import DetailedWeatherInfoModal from "../components/DetailedWeatherInfoModal";
import CurrentLocationWeather from "../components/CurrentLocationWeather";



const Home = () => {
  const navigation = useNavigation();
  
  
  
  const detailedInfoModalRef = useRef();

  const [cityName, setCityName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentLocationWeather, setCurrentLocationWeather] = useState({});
  const forcastDays = 5;

  const fetchCurrentWeatherData = async ( latitude, longitude) => {
    apiCall.fetchCurrentLocationWeatherDetails(
      WEATHER_API_KEY,
      latitude,
      longitude,
      (success, response) => {
        if (success) {
          
          setCurrentLocationWeather(response);
        }
      }
    );
  };
  useEffect(() => {
    const getLocationAndCity = async () => {
      const permissionGranted = await requestLocationPermission();
      if (permissionGranted) {
        getCurrentLocation((status, position) => {
          if (status) {
            fetchCurrentWeatherData(
              
              position.latitude,
              position.longitude
            );
          } else {
            SnackBar.showErrorMsg("Unable to get location");
          }
        });
      }
    };
    getLocationAndCity();
  }, []);

  const handleWeatherFetch = () => {
    if (cityName != "") {
      setIsLoading(true);
      apiCall.fetchWeatherDetails(
        WEATHER_API_KEY,
        cityName,
        forcastDays,
        (success, response) => {
          setIsLoading(false);
          if (success) {
            navigation.navigate("WeatherDetails", { weatherData: response });
            setCityName("");
          }
        }
      );
    } else {
      SnackBar.showErrorMsg("Please enter valid city name", 3000);
    }
  };

  return (
    <>
      <Header centerComponent={{ text: "Home", style: styles.heading }} />
      <View style={styles.container}>
        {currentLocationWeather.current && (
          <CurrentLocationWeather
            currentLocationWeather={currentLocationWeather}
            detailedInfoModalRef={detailedInfoModalRef}
          />
        )}

        <Input
          placeholder="Enter city name"
          placeholderTextColor={Colors.moreLightGray}
          onChangeText={(text) => setCityName(text)}
          value={cityName}
        />

        <Button
          buttonStyle={styles.submitButton}
          title="Submit"
          type="outline"
          onPress={handleWeatherFetch}
          loading={isLoading}
        />
      </View>
      <DetailedWeatherInfoModal ref={detailedInfoModalRef} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: wp(5),
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  submitButton: {
    width: wp(86),
    marginBottom: wp(2),
    borderRadius: wp(3),
  },
});

export default Home;
