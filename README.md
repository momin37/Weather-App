# Weather Forecast App - React Native

Welcome to the Weather Forecast App! This React Native application allows users to check the weather for their current location on the home screen and input any city name to get the weather for that city at the current time. The app utilizes the device's location services to fetch weather data for the user's current location and the OpenWeatherMap API to get weather information for a specific city.

## Features

- View weather for the current location on the home screen.
- Search for weather in any city around the world.
- Get real-time weather updates.
- You can change the units of measurement by clicking on the setting icon on Detail Screen
- Beautiful and intuitive user interface.

## How to Run the Project

To run the Weather Forecast App locally on your machine, follow these steps:

### Prerequisites

1. Make sure you have Node.js and npm (Node Package Manager) installed. You can download them from [here](https://nodejs.org/).

2. Install React Native CLI by running the following command in your terminal:

   
   npm install -g react-native-cli
   

### Clone the Git Repository

1. Open a terminal or command prompt.

2. Change the current working directory to the location where you want to clone the repository.

3. Run the following command to clone the repository:

   
   git clone <repository_url>
   

### Install Dependencies

1. Navigate to the project directory:

   
   cd weather-forecast-app
   

2. Install the required dependencies:

   
   npm install
   

### Set Up WeatherApi API Key

1. Sign up for a free account on [WeatherApi](https://www.weatherapi.com/signup.aspx) if you don't have one.

2. Obtain your API key from OpenWeatherMap.

3. Open the `config.js` file located in the project's root directory.

4. Replace `'YOUR_API_KEY'` with your actual API key:

   javascript
   const API_KEY = 'YOUR_API_KEY';
   export default API_KEY;
   

### Run the App

1. Connect your Android or iOS device to your computer or set up an emulator/simulator.

2. For Android devices or emulators, run:

   
   react-native run-android
   

   For iOS devices or simulators, run:

   
   react-native run-ios
   

   The app will be compiled and installed on your device/emulator.

3. Once the build is successful, the app will open automatically on your device/emulator.

### Congratulations!

You have successfully set up and run the Weather Forecast App on your device. Now you can explore the weather in your current location or any other city in the world!

## Contributing

We welcome contributions to the Weather Forecast App. If you find any issues or have suggestions for improvement, please feel free to submit a pull request.

## License

The Weather Forecast App is open-source software licensed under the [MIT License](LICENSE).

---

Thank you for using our Weather Forecast App! We hope you find it helpful and enjoy using it. If you have any questions or need further assistance, please feel free to reach out to us.

Happy weather tracking! 🌦️🌧️🌞
