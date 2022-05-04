import React from 'react';
import {Linking,Platform} from 'react-native';
import styled from 'styled-components';
import AppHeader from '../shared-component/header';
import Layout from '../shared-component/layout';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color, Iconsizes, sizes} from '../configs/theme';
import {AnimatableView, HeaderImage, Paragraph, SectionHeader} from './styles';
import * as Animatable from 'react-native-animatable';

const Contact = () => {
  return (
    <>
      <AppHeader />
      <Layout noPadding>
        <HeaderImage
          source={require('../assest/images/contact-banner.jpg')}
          resizeMode="cover"
        />
        <Animatable.View animation="slideInUp">
          <AnimatableView style={Platform.OS === 'ios' ? { flexGrow: 1 } : { flex: 1 }}>
            <Layout boxlayout>
              <SectionHeader style={{textAlign: 'center'}}>
                Book your appointment now
              </SectionHeader>
              <Paragraph style={{textAlign: 'center'}}>
                Please contact us on the details below or send us a message. You
                are also more than welcome to visit our Morley Office for a
                Coffee
              </Paragraph>
              <SliderWrap>
                <Icon
                  name="location-pin"
                  color={color.secondry}
                  size={Iconsizes.iconSize5}
                />
                <SliderText>
                  Shop 4, 263 Walter Road W, Morley WA 6062.
                </SliderText>
              </SliderWrap>

              <SliderWrap>
                <Icon
                  name="phone"
                  color={color.secondry}
                  size={Iconsizes.iconSize5}
                />
                <SliderText>(08) 9375 5707</SliderText>
              </SliderWrap>
              <SliderWrap>
                <Icon
                  name="screen-smartphone"
                  color={color.secondry}
                  size={Iconsizes.iconSize5}
                />
                <SliderText>0478 149 837</SliderText>
              </SliderWrap>
              <SliderWrap>
                <Icon
                  name="envelope-letter"
                  color={color.secondry}
                  size={Iconsizes.iconSize5}
                />
                <SliderText>info@morleystptax.com.au</SliderText>
              </SliderWrap>
              <ThemeButton
                onPress={() =>
                  Linking.openURL(
                    'https://successtaxprofessionalsmorley.setmore.com/bookappointment',
                  )
                }>
                <BtnText>Book Now</BtnText>
              </ThemeButton>
            </Layout>
          </AnimatableView>
        </Animatable.View>
      </Layout>
    </>
  );
};
export default Contact;
const ThemeButton = styled.TouchableOpacity`
  background: ${color.secondry};
  align-self: center;
  padding: ${wp('3%')}px ${wp('7%')}px;
  margin-top: ${wp('6%')}px;
  border-radius: 5px;
`;
const BtnText = styled.Text`
  font-size: ${sizes.font16};
  color: ${color.white};
`;
const SliderWrap = styled.View`
  flex-direction: row;
  background: ${color.white};
  padding: ${wp('3%')}px ${wp('3%')}px;
  margin: ${wp('1%')}px;
  border-radius: 10px;
`;
const SliderText = styled.Text`
  font-size: ${sizes.font14};
  color: ${color.primary};
  margin-left: ${wp('2%')}px;
  font-weight: bold;
  width: 100%;
`;
