import React, {useState} from 'react';
import styled from 'styled-components';
import AppHeader from '../shared-component/header';
import Layout from '../shared-component/layout';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';
import {AnimatableView, HeaderImage, Paragraph, SectionHeader} from './styles';
import * as Animatable from 'react-native-animatable';
import {color, sizes} from '../configs/theme';
import PropTypes from 'prop-types';
const Home = () => {
  const homeData = [
    {
      title: '700+',
      desc: 'ACTIVE CLIENTS',
    },
    {
      title: '10000+',
      desc: 'RETURNS LODGED',
    },
    {
      title: '8+',
      desc: 'YEARS EXPERIENCE',
    },
    {
      title: '3674+',
      desc: 'TRAINING HOURS',
    },
  ];
  const _renderHomeItem = ({item, index}) => {
    return (
      <SliderWrap>
        <SliderText>{item.title}</SliderText>
        <Paragraph style={{textAlign: 'center'}}>{item.desc}</Paragraph>
      </SliderWrap>
    );
  };
  return (
    <>
      <AppHeader />
      <Layout noPadding>
        <HeaderImage
          source={require('../assest/images/about-banner.jpg')}
          resizeMode="cover"
        />
        <Animatable.View animation="slideInUp">
          <AnimatableView>
            <Layout boxlayout>
              <SectionHeader style={{textAlign: 'center'}}>
                Optimise the potential of your business and achieve your
                financial goals
              </SectionHeader>

              <Paragraph style={{textAlign: 'center'}}>
                Registered Tax Agents, Accountants & Business Advisors.
              </Paragraph>
              <CarouselWrapper>
                <Carousel
                  data={homeData}
                  renderItem={_renderHomeItem}
                  sliderWidth={wp('100%')}
                  itemWidth={wp('50%')}
                  firstItem={2}
                  loop={true}
                />
              </CarouselWrapper>
              <SectionHeader
                style={{textAlign: 'center', color: color.secondry}}>
                What We Do?
              </SectionHeader>
              <Paragraph style={{textAlign: 'center'}}>
                We are an elite accounting and taxation firm in Morley providing
                a wide range of business services to individuals, businesses,
                and companies; in order to assist them in achieving their
                financial goals.
              </Paragraph>
              <ImageWrap
                resizeMode="contain"
                source={require('../assest/images/about-img.jpg')}
              />
            </Layout>
          </AnimatableView>
        </Animatable.View>
      </Layout>
    </>
  );
};
export default Home;

const ImageWrap = styled.Image`
  width: 100%;
  height: ${wp('50%')}px;
  border-radius: 20px;
  overflow: hidden;
`;

const CarouselWrapper = styled.View`
  align-items: center;
  margin: ${wp('3%')}px 0;
`;
const SliderWrap = styled.View`
  align-items: center;
  background: ${color.white};
  padding: ${wp('5%')}px ${wp('3%')}px;
  margin: ${wp('1%')}px;
  border-radius: 10px;
`;
const SliderText = styled.Text`
  text-align: center;
  font-size: ${sizes.font17};
  color: ${color.secondry};
  text-transform: uppercase;
  margin-bottom: ${wp('1%')}px;
  font-weight: bold;
`;
