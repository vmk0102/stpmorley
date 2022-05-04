import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color, fonts, lineHeights, sizes} from '../configs/theme';

export const SectionHeader = styled.Text`
  font-size: ${sizes.font18};
  margin: ${wp('2%')}px 0;
  color: ${color.primary};
  margin-top: ${wp('5%')}px;
  font-weight: bold;
`;

export const Paragraph = styled.Text`
  font-size: ${sizes.font16};
  color: ${color.placeholder_color};
  line-height: ${lineHeights.h3}px;
  margin-bottom: ${wp('2%')}px;
`;
export const AnimatableView = styled.View`
  background: ${color.app_bg};
  margin-top: -90px;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  overflow: hidden;
  padding-bottom: ${hp('7%')}px; ;
`;
export const HeaderImage = styled.ImageBackground`
  height: ${hp('40%')}px;
  border-radius: 10px;
`;
