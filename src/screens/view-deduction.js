import React, {useState} from 'react';
import {Image} from 'react-native';
import AppHeader from '../shared-component/header';
import Layout from '../shared-component/layout';

const ViewDeduction = props => {
  const {image} = props.route.params;
  return (
    <>
      <AppHeader allowGoback />
      <Layout boxlayout>
        <Image
          source={{uri: image}}
          resizeMode="cover"
          style={{height: '100%', width: '100%'}}
        />
      </Layout>
    </>
  );
};
export default ViewDeduction;
