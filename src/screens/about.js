import React from 'react';
import styled from 'styled-components';
import AppHeader from '../shared-component/header';
import Layout from '../shared-component/layout';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color, Iconsizes, sizes} from '../configs/theme';
import * as Animatable from 'react-native-animatable';
import {AnimatableView, HeaderImage, Paragraph, SectionHeader} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconF5 from 'react-native-vector-icons/FontAwesome5';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';

const About = () => {
  const blogsData = [
    {
      icon: (
        <Icon name="eye" color={color.secondry} size={Iconsizes.iconSize9} />
      ),
      title: 'Our Vision',
      desc: 'Our vision is to be the trusted tax and business advisor of choice in the eyes of our all our clientele.',
    },
    {
      icon: (
        <IconF5
          name="fist-raised"
          color={color.secondry}
          size={Iconsizes.iconSize9}
        />
      ),
      title: 'Our Mission',
      desc: 'We are results driven and focussed on achieving business performance, maximised savings for all clients.',
    },
    {
      icon: (
        <IconF5
          name="book-open"
          color={color.secondry}
          size={Iconsizes.iconSize9}
        />
      ),
      title: 'Our Values',
      desc: 'Our values revolve around 4 qualities and these are honesty, integrity, being ethical and professionalism.',
    },
    {
      icon: (
        <IonIcons
          name="settings"
          color={color.secondry}
          size={Iconsizes.iconSize9}
        />
      ),
      title: 'Our Strategy',
      desc: 'Our Strategy is to constantly adapt to changes in the industry and to build long term symbiotic relationships.',
    },
  ];
  const teamData = [
    {
      image: require('../assest/images/team1.jpg'),
      name: 'Martha Chen',
      position: 'Principal Accountant',
      description: [
        'Possessing a bachelor of commerce in accounting, a master’s in international management, being a registered tax agent and having over 13 years of experience in the accounting industry; Martha Chen has been with Success Tax Professionals Morley since its inception and has been committed to her role for over 7 years.  ',
      ],
    },
    {
      image: require('../assest/images/team2.jpg'),
      name: 'Yash Gandhi',
      position: 'Tax Consultant',
      description: [
        'With experience in accounting, e-commerce, education, fitness, hospitality, marketing, retail, sports administration, and sales; along with a bachelor of commerce in accounting and marketing from UWA, and a PYP in accounting, Yash deals with all matters related to tax at Success Tax Professionals Morley.  ',
      ],
    },
    {
      image: require('../assest/images/team3.jpg'),
      name: 'Wenyan Winnie Wang',
      position: 'Tax Accountant',
      description: [
        'Winnie Possesses over 6 years of experience in accounting; along with a bachelor’s degree in accounting, a PYP in accounting, a master’s degree in accounting from the University of Melbourne, she is also pursuing a CPA and a second Masters in Computer Science at ECU in order to broaden her horizons in Fintech as well. Winnie deals with all aspects of accounting at Success Tax Professionals Morley.',
      ],
    },
  ];
  const _renderBlogItem = ({item, index}) => {
    return (
      <SliderWrap>
        {item.icon}
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
          source={require('../assest/images/service-banner.jpg')}
          resizeMode="cover"
        />
        <Animatable.View animation="slideInUp">
          <AnimatableView>
            <Layout boxlayout>
              <SectionHeader>About Us</SectionHeader>
              <Paragraph>
                Back in 2014, three friends working in the corporate world had
                the burning desire and shared vision to start their own
                accounting firm and hence Success Tax Professionals Morley was
                created.
              </Paragraph>
              <Paragraph>
                Success Tax Professionals Morley has been operating in Morley
                for over 7 years, with the trust and support of our clients and
                the guidance of Martha Chen, the principal. Our Morley practice
                has grown from a small business to a bustling accounting and tax
                practice, assisting over a thousand clients each year with their
                businesses, taxation requirements, and financial obligations.
              </Paragraph>
              <Paragraph>Talk to us and see how we can help.</Paragraph>
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
              <SectionHeader
                style={{
                  color: color.secondry,
                  textAlign: 'center',
                  marginTop: wp('5%'),
                  marginBottom: 0,
                  fontWeight: 'bold',
                }}>
                Our Team
              </SectionHeader>
              <SectionHeader style={{textAlign: 'center', marginTop: 0}}>
                Meet The Professionals
              </SectionHeader>

              {teamData.map((item, index) => {
                return (
                  <TeamBox key={index}>
                    <TeamImg source={item.image} />
                    <TextWrap>
                      <Name>{item.name}</Name>
                      <Post>{item.position}</Post>
                      {item.description.map((item1, index1) => {
                        return <Paragraph key={index1}>{item1}</Paragraph>;
                      })}
                    </TextWrap>
                  </TeamBox>
                );
              })}
            </Layout>
          </AnimatableView>
        </Animatable.View>
      </Layout>
    </>
  );
};
export default About;
const TeamImg = styled.Image`
  height: ${wp('20%')}px;
  width: ${wp('20%')}px;
  border-radius: 100px;
  margin-right: ${wp('3%')}px;
  overflow: hidden;
  border-width: 3px;
  border-color: ${color.secondry};
`;
const TeamBox = styled.View`
  background: ${color.white};
  padding: ${wp('3%')}px;
  border-radius: 10px;
  margin: ${wp('3%')}px 0;
`;
const Name = styled.Text`
  font-size: ${sizes.font16};
  margin-top: ${wp('2%')}px;
  color: ${color.primary};
  font-weight: bold;
`;
const Post = styled.Text`
  font-size: ${sizes.font14};
  margin-bottom: ${wp('2%')}px;
  color: ${color.secondry};
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
const TextWrap = styled.View``;
