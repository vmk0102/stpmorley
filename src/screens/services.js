import React from 'react';
import styled from 'styled-components';
import AppHeader from '../shared-component/header';
import Layout from '../shared-component/layout';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import IconF5 from 'react-native-vector-icons/FontAwesome5';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {color, Iconsizes, sizes} from '../configs/theme';
import {AnimatableView, HeaderImage, Paragraph, SectionHeader} from './styles';
import {Linking} from 'react-native';
const Services = () => {
  const blogsData = [
    {
      icon: (
        <Icon name="pencil" color={color.secondry} size={Iconsizes.iconSize9} />
      ),
      title: 'Taxation',
      desc: 'Success Tax Professionals Morley specialises in all aspects of tax, whether you are an individual, a sole trader business, or a company with more than 50 employees.',
      link: null,
    },
    {
      icon: (
        <IconMat
          name="account-tree"
          color={color.secondry}
          size={Iconsizes.iconSize9}
        />
      ),
      title: 'Accounting Services',
      desc: 'Success Tax Professionals Morley customises the accounting services it provides to the needs of the business, from bookkeeping and payroll to part-time CFO services.',
      link: null,
    },
    {
      icon: (
        <IconF5
          name="calculator"
          color={color.secondry}
          size={Iconsizes.iconSize9}
        />
      ),
      title: 'Taxation Services',
      desc: 'Tax planning is a specialist service in which clients can have their circumstances profiled against a range of legal strategies to significantly reduce tax and optimise savings.',
      link: null,
    },
    {
      icon: (
        <IconF5 name="hive" color={color.secondry} size={Iconsizes.iconSize9} />
      ),
      title: 'Business Advisory Services',
      desc: 'We work together with business owners to identify the gaps in their business structures and to implement strategies to fulfill those gaps and optimise business performance.',
      link: null,
    },
    {
      icon: (
        <IconF5
          name="house-damage"
          color={color.secondry}
          size={Iconsizes.iconSize9}
        />
      ),
      title: 'Self-Managed Super Fund',
      desc: 'Success Tax Professionals Morley can assist you to administer and manage your fund so that you are always in control of your obligations as a trustee of a SMSF.',
      link: null,
    },
    {
      icon: (
        <IconF5
          name="book-reader"
          color={color.secondry}
          size={Iconsizes.iconSize9}
        />
      ),
      title: 'Tax Training Course',
      desc: 'Success Tax Professionals Morley also conducts a tax training course every year to aspire new and upcoming fresh graduates to receive hands-on industry experience.',
      link: null,
    },
    {
      icon: (
        <IonIcons
          name="layers"
          color={color.secondry}
          size={Iconsizes.iconSize9}
        />
      ),
      title: 'Other Services',
      desc: 'We also assist clients with representation to the ATO, consumer protection, and other government or legal entities; we assist clients with debt collection and auditing as well.',
      link: null,
    },
    {
      icon: (
        <IconF5
          name="thumbs-up"
          color={color.secondry}
          size={Iconsizes.iconSize9}
        />
      ),
      title: 'Tax Tips',
      desc: 'There are numerous ways in which we can optimise the saving of our taxes, ',
      link: 'www.stptax.com/tax-tips/',
    },
  ];
  const logoData = [
    {
      image: require('../assest/images/brand1.png'),
    },
    {
      image: require('../assest/images/brand2.png'),
    },
   
    {
      image: require('../assest/images/brand4.png'),
    },
    {
      image: require('../assest/images/brand5.png'),
    },
    {
      image: require('../assest/images/brand3.png'),
    },
  ];
  const _renderBlogItem = ({item, index}) => {
    return (
      <SliderWrap>
        {item.icon}
        <SliderText>{item.title}</SliderText>
        <Paragraph style={{textAlign: 'center'}}>
          {item.desc}{' '}
          {item.link != null ? (
            <Paragraph>
              please visit{' '}
              <Paragraph
                style={{color: color.secondry, fontWeight: 'bold'}}
                onPress={() =>
                  Linking.openURL('https://www.stptax.com/tax-tips/')
                }>
                www.stptax.com/tax-tips/{' '}
              </Paragraph>
              for over a hundred tax tips to optimise your savings.
            </Paragraph>
          ) : null}
        </Paragraph>
      </SliderWrap>
    );
  };
  const _renderLogoItem = ({item, index}) => {
    return (<BrandImageWrap><BrandImage source={item.image} resizeMode="contain" /></BrandImageWrap>);
  };
  return (
    <>
      <AppHeader />
      <Layout noPadding>
        <HeaderImage
          source={require('../assest/images/service-banner.jpg')}
          resizeMode="cover"
        />
        <Animatable.View animation="slideInUp">
          <AnimatableView>
            <Layout boxlayout>
              <SectionHeader style={{textAlign: 'center'}}>
                We offer a great range of services for your business to reach
                its optimum potential.
              </SectionHeader>
              <CarouselWrapper>
                <Carousel
                  data={blogsData}
                  renderItem={_renderBlogItem}
                  sliderWidth={wp('100%')}
                  itemWidth={wp('80%')}
                  firstItem={2}
                  loop={true}
                />
              </CarouselWrapper>
              <CarouselWrapper >
                <Carousel
                  data={logoData}
                  renderItem={_renderLogoItem}
                  sliderWidth={wp('100%')}
                  itemWidth={wp('45%')}
                  firstItem={3}
                  loop={true}
                />
              </CarouselWrapper>
            </Layout>
          </AnimatableView>
        </Animatable.View>
      </Layout>
    </>
  );
};
export default Services;
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
  color: ${color.primary};
  text-transform: uppercase;
  margin-bottom: ${wp('1%')}px;
  margin-top: ${wp('2%')}px;
  font-weight: bold;
`;
const CarouselWrapper = styled.View`
  align-items: center;
  margin: ${wp('3%')}px 0;
`;
const BrandImage = styled.Image`
  width: 100%;
  height: ${hp('12%')}px;
`;
const BrandImageWrap = styled.View`
  padding:${wp('5%')}px ${wp('2%')}px;
  border-radius: 10px;
`;