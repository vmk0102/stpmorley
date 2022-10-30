
import AsyncStorage from '@react-native-async-storage/async-storage';



  export const setReviewStatus = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@review_status', jsonValue);
    } catch (e) {
      console.log('EROR',e);
    }
  };

  
  export const getReviewStatus = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@review_status');
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (e) {
       console.log('EROR',e);
    }
  };
