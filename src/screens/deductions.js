import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import AppHeader from '../shared-component/header';
import Layout from '../shared-component/layout';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import {color, Iconsizes, mobileScreen, sizes} from '../configs/theme';
import {AnimatableView, HeaderImage, Paragraph, SectionHeader} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {dropdownItems} from '../configs/constants';
import {db} from '../../App';
import {useIsFocused} from '@react-navigation/native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Share from 'react-native-share';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Deductions = ({navigation}) => {
  const [activeSections, setActiveSections] = useState([]);
  const [deductionList, setDeductionlist] = useState([]);
  const [selected, setSelected] = useState(null);
  const [years, setYears] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    createDb();
    fetchDeductions();
    fetchYears();
    setSelected(null);
  }, [isFocused]);
  const createDb = () => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='user_deduction'",
        [],
        function (tx, res) {
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS user_deduction', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS user_deduction(deduction_id INTEGER PRIMARY KEY AUTOINCREMENT, deduction_name VARCHAR(20), deduction_type INT(10), image_url TEXT,year VARCHAR(20))',
              [],
            );
          }
        },
      );
    });
  };
  const fetchDeductions = () => {
    db.transaction(function (txn) {
      txn.executeSql('SELECT * FROM user_deduction ', [], function (tx, res) {
        var temp = [];
        for (let i = 0; i < res.rows.length; ++i) temp.push(res.rows.item(i));
        setDeductionlist(temp);
      });
    });
  };

  const deleteDeduction = deductionId => {
    db.transaction(function (txn) {
      txn.executeSql(
        `DELETE FROM user_deduction WHERE deduction_id=${deductionId}`,
        [],
        function (tx, res) {
          Alert.alert('Successful', 'Deduction deleted.', [
            {
              text: 'OK',
              onPress: () => fetchDeductions(),
            },
          ]);
        },
      );
    });
  };
  const handleDelete = (deductionId, deductionName) => {
    Alert.alert(
      'Delete Deduction',
      `Are you sure you want to delete the ${deductionName}'s deduction?`,
      [
        {
          text: 'Yes',
          onPress: () => deleteDeduction(deductionId),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancelled'),
        },
      ],
    );
  };

  const handleShare = async (image_url, name, year) => {
    const shareOptions = {
      url: image_url,
      social: Share.Social.EMAIL,
      subject: `Deduction: ${name}(${year})`,
    };
    Share.shareSingle(shareOptions);
  };

  const filterByYear = selectedYear => {
    db.transaction(function (txn) {
      selectedYear !== null
        ? [
            txn.executeSql(
              `SELECT * FROM user_deduction WHERE year = ${selectedYear}`,
              [],
              function (tx, res) {
                var temp = [];
                for (let i = 0; i < res.rows.length; ++i)
                  temp.push(res.rows.item(i));
                setDeductionlist(temp);
              },
            ),
            setSelected(selectedYear),
          ]
        : txn.executeSql(
            `SELECT * FROM user_deduction`,
            [],
            function (tx, res) {
              var temp = [];
              for (let i = 0; i < res.rows.length; ++i)
                temp.push(res.rows.item(i));
              setDeductionlist(temp);
            },
          );
    });
  };

  const fetchYears = () => {
    db.transaction(function (tx) {
      tx.executeSql(
        'SELECT DISTINCT year FROM user_deduction ',
        [],
        function (tx, res) {
          var temp2 = [];
          for (let i = 0; i < res.rows.length; ++i)
            temp2.push({
              label: res.rows.item(i).year,
              value: res.rows.item(i).year,
            });
          setYears(temp2);
        },
      );
    });
  };

  const _renderHeader = section => {
    return (
      <AccordionHeader>
        <Icon
          style={{marginTop: 4}}
          name="plus"
          color={color.secondry}
          size={Iconsizes.iconSize4}
        />
        <Title>{section.label}</Title>
      </AccordionHeader>
    );
  };
  const _renderContent = section => {
    const content = deductionList.filter(
      ({deduction_type}) => deduction_type === section.value,
    );
    return (
      <AccordionContent>
        {content.map((item, index) => {
          console.log(item.image_url)
          return (
            <View
              key={index}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ViewDeduction', {image: item.image_url})
                }>
                <Paragraph key={index}>
                  {item.deduction_name}{' '}
                  <Paragraph style={{color: color.secondry}}>
                    (Year - {parseInt(item.year)})
                  </Paragraph>
                </Paragraph>
              </TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() =>
                    handleDelete(item.deduction_id, item.deduction_name)
                  }>
                  <Icon
                    name="trash-o"
                    size={Iconsizes.iconSize5}
                    color={color.secondry}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginLeft: 10}}
                  onPress={() =>
                    handleShare(item.image_url, item.deduction_name, item.year)
                  }>
                  <Icon
                    name="share"
                    size={Iconsizes.iconSize5}
                    color={color.secondry}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </AccordionContent>
    );
  };
  const _updateSections = activeSections => {
    setActiveSections(activeSections);
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
            <Layout boxlayout first>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  padding: 7,
                }}
                onPress={() => navigation.navigate('HelpScreen')}>
                <AntIcon
                  name="exclamationcircleo"
                  size={Iconsizes.iconSize5}
                  color={color.secondry}
                />
              </TouchableOpacity>

              <SectionHeader>Deductions CheckList</SectionHeader>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                  marginTop: 20,
                }}>
                <FilterBar>
                  <RNPickerSelect
                    onValueChange={val => filterByYear(val)}
                    items={years}
                    value={selected}
                    placeholder={{
                      label: 'Filter By Year',
                    }}
                    selected={null}
                    style={{
                      ...pickerSelectStyles,
                      iconContainer: {
                        top: '35%',
                        right: '5%',
                      },
                      placeholder: {
                        color: color.light_gray,
                      },
                    }}
                    mode="dialog"
                    useNativeAndroidPickerStyle={false}
                    Icon={() => {
                      return (
                        <AntIcon
                          name="down"
                          size={Iconsizes.iconSize4}
                          color={color.secondry}
                        />
                      );
                    }}
                  />
                </FilterBar>
                <AddNewBtn onPress={() => navigation.navigate('AddForm')}>
                  <AddText>
                    Add New{'  '}
                    <Icon
                      style={{marginTop: 4}}
                      name="calendar-plus-o"
                      color={color.white}
                      size={Iconsizes.iconSize4}
                    />
                  </AddText>
                </AddNewBtn>
              </View>

              <Accordion
                sections={dropdownItems}
                activeSections={activeSections}
                renderHeader={_renderHeader}
                renderContent={_renderContent}
                onChange={_updateSections}
                underlayColor={'transparent'}
              />
            </Layout>
          </AnimatableView>
        </Animatable.View>
      </Layout>
    </>
  );
};
export default Deductions;
const AccordionHeader = styled.View`
  background: ${color.white};
  margin-bottom: ${wp('3%')}px;
  padding: ${wp('3%')}px;
  border-radius: 6px;
  flex-direction: row;
`;
const AccordionContent = styled.View`
  padding: 0 ${wp('3%')}px;
  margin-bottom: ${wp('3%')}px;
  padding-left: ${wp('6%')}px;
`;
const Title = styled.Text`
  color: ${color.primary};
  font-weight: bold;
  font-size: ${sizes.font16};
  text-transform: uppercase;
  margin-left: 10px;
`;
const AddNewBtn = styled.TouchableOpacity`
  background: ${color.secondry};
  margin-bottom: ${wp('4%')}px;
  align-self: flex-end;
  padding: ${wp('2%')}px ${wp('5%')}px;
  border-radius: 6px;
`;
const AddText = styled.Text`
  color: ${color.white};
  font-size: ${sizes.font16};
  font-weight: bold;
`;
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: mobileScreen ? wp('4.2%') : wp('3.2%'),
    paddingVertical: wp('2%'),
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: color.gray,
    color: color.black,
    paddingRight: 30,
    backgroundColor: color.white,
  },
  inputAndroid: {
    fontSize: mobileScreen ? wp('4.2%') : wp('3.2%'),
    paddingHorizontal: 0,
    paddingVertical: wp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: color.gray,
    color: color.black,
    paddingRight: 30,
    paddingLeft: wp('3%'),
    backgroundColor: color.white,
    borderColor: color.white,
    padding: wp('5.5%'),
  },
});
const FilterBar = styled.View`
  width: ${wp('40%')}px;
`;
