import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Alert, StatusBar, Text} from 'react-native';
import {AppStack} from './src/routes/main-routes';
import SplashScreen from 'react-native-splash-screen';
import {openDatabase} from 'react-native-sqlite-storage';
import PushNotification from "react-native-push-notification";
import Firebase from '@react-native-firebase/app';
import PropTypes from 'prop-types'
export const db = openDatabase({name: 'DeductionDatabase.db'});
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    Firebase.initializeApp()
    PushNotification.configure({
      onRegister: function (token) {
        // AsyncStorage.setItem('fcmToken',token.token);
        console.log("FCM  TOKEN:", token.token);
      },

      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
        notification.foreground;
        notification.userInteraction = true;
        notification.message = "New Notification";
        notification.alert = notification.message;
        PushNotification.localNotification(notification)
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
      },
      onRegistrationError: function (err) {
        console.error(err.message, err);
      },

      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
    // NOTIFICATION
  }, [])
  return (
    <>

      <StatusBar barStyle="dark-content" translucent={false} />
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>

    </>
  );
};

export default App;
