import React from 'react';
import AppHeader from '../shared-component/header';
import Layout from '../shared-component/layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color, Iconsizes, sizes} from '../configs/theme';
import {Paragraph, SectionHeader} from './styles';
import {View} from 'react-native';
const HelpScreen = () => {
  return (
    <>
      <AppHeader allowGoback />
      <Layout noPadding>
        <Layout boxlayout>
          <SectionHeader>To Add a Deduction</SectionHeader>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="angle-right"
              color={color.secondry}
              size={Iconsizes.iconSize4}
              style={{marginRight: 7}}
            />
            <Paragraph>
              Both Individuals and Soletraders can now save all of their
              deductions in the app; simply click on the Add New button and scan
              your deduction to be saved into the app.
            </Paragraph>
          </View>
          <SectionHeader>To View a Deduction</SectionHeader>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="angle-right"
              color={color.secondry}
              size={Iconsizes.iconSize4}
              style={{marginRight: 7}}
            />
            <Paragraph>
              You can also check your recorded deduction by clicking on the
              deduction category.
            </Paragraph>
          </View>
          <SectionHeader>To Save a Deduction</SectionHeader>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="angle-right"
              color={color.secondry}
              size={Iconsizes.iconSize4}
              style={{marginRight: 7}}
            />
            <Paragraph>
              Please click on scan to record your deduction and write any notes
              associated with the deduction in the description box below:
            </Paragraph>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="angle-right"
              color={color.secondry}
              size={Iconsizes.iconSize4}
              style={{marginRight: 7}}
            />
            <Paragraph>
              Hint: Use the description box below to seperate your Sole trader
              deductions from your Personal deductions.
            </Paragraph>
          </View>
          <SectionHeader>Delete or Share your receipt</SectionHeader>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="angle-right"
              color={color.secondry}
              size={Iconsizes.iconSize4}
              style={{marginRight: 7}}
            />
            <Paragraph>
              Click on the trash icon to delete the receipt and share icon to
              share your receipt.
            </Paragraph>
          </View>
        </Layout>
      </Layout>
    </>
  );
};
export default HelpScreen;
