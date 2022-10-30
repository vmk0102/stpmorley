import React from 'react';
import { setReviewStatus } from '../configs/storage';
import { Alert, Linking, Platform } from 'react-native';

const ReviewAlert = () => {
    const GOOGLE_PACKAGE_NAME = 'com.stpmorley';
    const APPLE_STORE_ID ='1619941924';
    Alert.alert(
        'Rate STP Morley',
        'If you enjoy using STP Morley, please take a moment to rate it. Thanks for your support!',
        [
        
          {
            text: 'Never',
            onPress: () => {
              setReviewStatus(false);
            },
          },
          {
            text: 'Cancel',
            onDismiss: () => {}
          },
          {
            text: 'Rate Now',
            onPress: () => {
              if (Platform.OS != 'ios') {
                //To open the Google Play Store
                Linking.openURL(`market://details?id=${GOOGLE_PACKAGE_NAME}`).catch(err =>
                  alert('Please check for the Google Play Store')
                );
              } else {
                //To open the Apple App Store
                Linking.openURL(
                  `itms://itunes.apple.com/in/app/apple-store/${APPLE_STORE_ID}`
                ).catch(err => alert('Please check for the App Store'));
              }
            },
          },
        ],
      )
};

export default ReviewAlert;
