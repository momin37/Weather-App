import React, {useEffect} from 'react';
import ScreenNavigator from './src/navigation/ScreenNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import NetInfo from '@react-native-community/netinfo';
import {constants} from './src/utils';

const App = () => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      
        console.log('internet-----', state.isConnected);
        constants.isInternetConnected = state.isConnected;
      
    });
    return () => {
      unsubscribe();
    };
  },[]);
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <ScreenNavigator />
      <FlashMessage />
    </SafeAreaProvider>
  );
};

export default App;
