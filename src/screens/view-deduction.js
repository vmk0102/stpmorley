import React, {useState} from 'react';
import {Image} from 'react-native';
import AppHeader from '../shared-component/header';
import Layout from '../shared-component/layout';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ViewDeduction = props => {
  const {image} = props.route.params;
  return (
    <>
      <AppHeader allowGoback />
      <Layout boxlayout>
        <Image
          source={{uri: image}}
          resizeMode="cover"
          style={{height: hp('80%') , width: wp('90%') ,alignSelf:'center',justifyContent:'center',flexDirection:'column',alignItems:'center'}}
        />
      </Layout>
    </>
  );
};
export default ViewDeduction;
