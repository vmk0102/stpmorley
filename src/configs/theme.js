import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Dimensions} from 'react-native';

//D E V I C E    R E S P O N S I V E
export const deviceWidth = Dimensions.get('window').width;
export const mobileScreen = deviceWidth < 600;

// C O L O R S
export const color = {
  placeholder_color: '#333333',
  primary: '#000000',
  secondry: '#EC3238',
  white: '#ffffff',
  light_gray: '#cccccc',
  app_bg: '#f7f7f7',
  danger: '#9d1919',
};

//F O N T    F A M I L Y
export const fonts = {
  RobotoRegular: 'Roboto-Regular',
  RobotoMedium: 'Roboto-Medium',
  RobotoBold: 'Roboto-Bold',
  Sanchez: 'Sanchez-Regular',
};

export const boxShadow = {
  shadowColor: '#E8E8E8',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 4,
};

//F O N T    S I Z E S
export const sizes = {
  tabLabel: mobileScreen ? wp('2.8%') : wp('2.6%'),
  font14: mobileScreen ? `${wp('3.5%')}px` : `${wp('2.5%')}px`,
  font16: mobileScreen ? `${wp('4%')}px` : `${wp('2.5%')}px`,
  font17: mobileScreen ? `${wp('4.5%')}px` : `${wp('3%')}px`,
  font18: mobileScreen ? `${wp('5%')}px` : `${wp('3.5%')}px`,
  font20: mobileScreen ? `${wp('5.5%')}px` : `${wp('4%')}px`,
  font24: mobileScreen ? `${wp('6%')}px` : `${wp('4%')}px`,
  font28: mobileScreen ? `${wp('7%')}px` : `${wp('5%')}px`,
  font30: mobileScreen ? `${wp('7.5%')}px` : `${wp('5.3%')}px`,
};

export const Iconsizes = {
  iconSize1: mobileScreen ? wp('1.5%') : wp('1.5%'),
  iconSize3: mobileScreen ? wp('3%') : wp('2%'),
  iconSize4: mobileScreen ? wp('4%') : wp('3%'),
  iconSize5: mobileScreen ? wp('4.5%') : wp('3%'),
  iconSize5_5: mobileScreen ? wp('5.5%') : wp('4.5%'),
  iconSize6: mobileScreen ? wp('6%') : wp('5%'),
  iconSize15: mobileScreen ? wp('15%') : wp('10%'),
  iconSize12: mobileScreen ? wp('12%') : wp('9%'),
  iconSize9: mobileScreen ? wp('9%') : wp('7%'),
};
//L I N E   H E I G H T S
export const lineHeights = {
  h3: mobileScreen ? 20 : 23,
};
