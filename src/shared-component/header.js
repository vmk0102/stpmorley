import React from 'react';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color, fonts, Iconsizes, sizes} from '../configs/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const AppHeader = ({allowGoback}) => {
  const navigation = useNavigation();
  return (
    <HeaderWrapper>
      {allowGoback ? (
        <HeaderIcon onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back"
            color={color.secondry}
            size={Iconsizes.iconSize9}
          />
        </HeaderIcon>
      ) : null}

      <ImageWrap
        resizeMode="contain"
        source={require('../assest/images/logo.png')}
      />
      {allowGoback ? <HeaderIcon /> : null}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.SafeAreaView`
  z-index: 999;
  align-items: center;
  background: ${color.app_bg};
  flex-direction: row;
  justify-content: space-around;
`;
const ImageWrap = styled.Image`
  width: ${wp('60%')}px;
`;
const HeaderText = styled.Text`
  color: ${color.primary};
  text-align: center;
  font-size: ${sizes.font14};
`;
const HeaderIcon = styled.TouchableOpacity`
  width: ${wp('20%')}px;
  padding: 0 ${wp('2.5%')}px;
`;
export default AppHeader;
