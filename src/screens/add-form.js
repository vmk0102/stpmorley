import React, {useEffect, useState} from 'react';
import {
  Alert,
  PermissionsAndroid,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import AppHeader from '../shared-component/header';
import Layout from '../shared-component/layout';
import Icon from 'react-native-vector-icons/AntDesign';

import ImagePicker from 'react-native-image-crop-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color, Iconsizes, mobileScreen, sizes} from '../configs/theme';
import {AnimatableView, HeaderImage} from './styles';
import RNPickerSelect from 'react-native-picker-select';
import {dropdownItems} from '../configs/constants';
import {db} from '../../App';
import CameraRoll from '@react-native-community/cameraroll';

const AddForm = ({navigation}) => {
  const [yearList, setYearList] = useState([]);
  var currentYear = new Date().getFullYear();
  const [errorText, setErrorText] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    deduction_type: '',
    file_url: '',
    file_name: '',
    year: currentYear,
  });
  useEffect(() => {
    var max = currentYear;
    var min = max - 20;
    var years = [];
    for (var i = max; i >= min; i--) {
      years.push({label: `${i}`, value: i});
    }
    setYearList(years);
    if (Platform.OS === 'android') {
      checkImageWritePermission();
    }
  }, []);

  //SCAN IMAGE
  const handleCameraLaunch = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      const splittedArray = image.path.split('/');
      const fileName = splittedArray[splittedArray.length - 1];
      console.log(image);
      setFormData({
        ...formData,
        file_url: image.path,
        file_name: fileName,
      });
    });
  };

  //GET PERMISSION
  const checkImageWritePermission = async () => {
    try {
      const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      await PermissionsAndroid.request(permission);
      Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  };

  //DISCARD SELECTED IMAGE
  const handleFileClose = () => {
    setFormData({...formData, file_url: '', file_name: ''});
  };

  //SAVE IMAGE TO GALLERY
  const saveImageToGallery = async () => {
    CameraRoll.save(formData.file_url, {
      album: 'STP Morley',
      type: 'photo',
    }).then(() => {
      console.log('Image Saved to Gallery');
    });
  };

  //ADD DEDUCTION BUTTON
  const HandleAdd = () => {
    if (formData.file_url == '') {
      setErrorText('No image scanned');
    } else if (formData.name == '') {
      setErrorText('Name is a required field');
    } else if (formData.deduction_type == '') {
      setErrorText('Select a deduction type');
    } else {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO user_deduction (deduction_name, deduction_type, image_url,year) VALUES (?,?,?,?)',
          [
            formData.name,
            formData.deduction_type,
            formData.file_url,
            formData.year,
          ],
          (tx, results) => {
            if (results.rowsAffected > 0) {
              saveImageToGallery();
              Alert.alert('Successful', 'Deduction record added.', [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('Deductions Record'),
                },
              ]);
            } else {
              console.log('Updation Failed');
            }
          },
        );
      });
    }
  };

  return (
    <>
      <AppHeader allowGoback />
      <Layout noPadding>
        <HeaderImage
          source={require('../assest/images/contact-banner.jpg')}
          resizeMode="cover"
        />
        <AnimatableView>
          <Layout first boxlayout>
            <TouchableOpacity activeOpacity={0.9} onPress={handleCameraLaunch}>
              <DocItemCamera first>
                <Icon
                  name="camera"
                  color={`${color.white}`}
                  size={Iconsizes.iconSize5_5}
                />
                <ScanText> Scan</ScanText>
              </DocItemCamera>
            </TouchableOpacity>
            {formData.file_name !== '' && (
              <FileWrap>
                <FileIcon name="jpgfile1" size={Iconsizes.iconSize5_5} />
                <FileText>{formData.file_name}</FileText>

                <CloseFile onPress={handleFileClose}>
                  <Icon
                    name="close"
                    size={Iconsizes.iconSize4}
                    color={color.danger}
                  />
                </CloseFile>
              </FileWrap>
            )}
            <InputWrap
              onChangeText={val => setFormData({...formData, name: val})}
              value={formData.name}
              placeholder="Description/Notes"
              placeholderTextColor={color.light_gray}
            />
            <RNPickerSelect
              onValueChange={val =>
                setFormData({...formData, deduction_type: val})
              }
              placeholder={{
                label: 'Select Deduction Type...',
              }}
              items={dropdownItems}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: wp('3%'),
                  right: wp('3%'),
                },
                placeholder: {
                  color: color.light_gray,
                },
              }}
              mode="dialog"
              useNativeAndroidPickerStyle={false}
              Icon={() => {
                return (
                  <Icon
                    name="down"
                    size={Iconsizes.iconSize4}
                    color={color.secondry}
                  />
                );
              }}
            />
            <RNPickerSelect
              onValueChange={val => setFormData({...formData, year: val})}
              placeholder={{
                label: 'Select Year...',
              }}
              items={yearList}
              value={formData.year}
              style={{
                ...pickerSelectStyles,
                iconContainer: {
                  top: wp('3%'),
                  right: wp('3%'),
                },
                placeholder: {
                  color: color.light_gray,
                },
              }}
              mode="dialog"
              useNativeAndroidPickerStyle={false}
              Icon={() => {
                return (
                  <Icon
                    name="down"
                    size={Iconsizes.iconSize4}
                    color={color.secondry}
                  />
                );
              }}
            />
            <ErrorText>{errorText}</ErrorText>
            <AddNewBtn onPress={HandleAdd}>
              <AddText>Add New Deductions</AddText>
            </AddNewBtn>
          </Layout>
        </AnimatableView>
      </Layout>
    </>
  );
};
export default AddForm;
const ThemeButton = styled.TouchableOpacity`
  background: ${color.secondry};
  align-self: center;
  padding: ${wp('3%')}px ${wp('7%')}px;
  margin-top: ${wp('6%')}px;
  border-radius: 5px;
`;
const DocItemCamera = styled.View`
  background-color: ${color.secondry};
  padding: ${wp('2%')}px ${wp('4.5%')}px;
  border-radius: 8px;
  align-self: flex-start;
  flex-direction: row;
  margin-bottom: ${wp('2.5%')}px;
`;
const BtnText = styled.Text`
  font-size: ${sizes.font16};
  color: ${color.white};
`;
const InputWrap = styled.TextInput`
  background: ${color.white};
  padding: ${wp('2%')}px ${wp('3%')}px;
  margin-bottom: ${wp('3%')}px;
  font-size: ${sizes.font16};
  color: ${color.primary};
`;
const ErrorText = styled.Text`
  font-size: ${sizes.font14};
  color: ${color.secondry};
  margin: ${wp('3%')}px ${wp('1%')}px;
`;
const ScanText = styled.Text`
  font-size: ${sizes.font16};
  color: ${color.white};
  font-weight: bold;
`;
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: mobileScreen ? wp('4.2%') : wp('3.2%'),
    paddingVertical: wp('2%'),
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: color.white,
    color: color.black,
    paddingRight: 30,
    backgroundColor: color.white,
    marginBottom: wp('3%'),
  },
  inputAndroid: {
    fontSize: mobileScreen ? wp('4.2%') : wp('3.2%'),
    paddingHorizontal: 0,
    paddingVertical: wp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: color.white,
    color: color.black,
    paddingRight: 30,
    paddingLeft: wp('3%'),
    backgroundColor: color.white,
    borderColor: color.white,
    padding: wp('5.5%'),
    marginBottom: wp('3%'),
  },
});
const AddNewBtn = styled.TouchableOpacity`
  background: ${color.secondry};
  margin-top: ${wp('4%')}px;
  align-self: flex-end;
  padding: ${wp('2%')}px ${wp('5%')}px;
  border-radius: 6px;
`;
const AddText = styled.Text`
  color: ${color.white};
  font-size: ${sizes.font16};
  font-weight: bold;
`;
const FileIcon = styled(Icon)`
  color: ${color.primary};
  font-size: ${wp('3.3%')}px;
`;
const FileWrap = styled.View`
  align-items: center;
  flex-direction: row;
  padding-bottom: ${wp('4.3%')}px;
  padding-left: ${wp('1%')}px;
`;
const FileText = styled.Text`
  padding-left: ${wp('2%')}px;
  color: ${color.primary};
  font-size: ${wp('3.3%')}px;
  flex-grow: 1;
`;

const CloseFile = styled.TouchableOpacity`
  padding: ${wp('1%')}px;
`;