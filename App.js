import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {AppStack, HomeTabs} from './src/routes/main-routes';
import SplashScreen from 'react-native-splash-screen';
import {openDatabase} from 'react-native-sqlite-storage';
import {SafeAreaProvider,initialWindowMetrics} from 'react-native-safe-area-context';
export const db = openDatabase({name: 'DeductionDatabase.db'});

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar barStyle="dark-content" translucent={false} />
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaProvider>
    </>
  );
};

export default App;
