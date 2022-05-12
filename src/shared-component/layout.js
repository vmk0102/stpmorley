import React from 'react';
import {ScrollView, View, StatusBar, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import {color} from '../configs/theme';


const Layout = ({children, noPadding, boxlayout, first}) => {
  return (
    <SafeAreaViewWrap>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-start',
          paddingBottom: noPadding ? 0 : wp('6%'),
          paddingHorizontal: boxlayout ? wp('4%') : 0,
          backgroundColor: color.app_bg,
          position: 'relative',
          paddingTop: first ? wp('5.5%') : noPadding ? 0 : wp('3%'),
        }}>
        {children}
      </ScrollView>
    </SafeAreaViewWrap>
  );
};

const SafeAreaViewWrap = styled.SafeAreaView`
Flex:1 0;
`;

export default Layout;
