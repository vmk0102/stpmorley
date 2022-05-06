import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

// S C R E E N S
import About from '../screens/about';
import Home from '../screens/home';
import Deductions from '../screens/deductions';
import Services from '../screens/services';
import Contact from '../screens/contact';
import {color, fonts, Iconsizes, sizes} from '../configs/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddForm from '../screens/add-form';
import ViewDeduction from '../screens/view-deduction';
import HelpScreen from '../screens/help';


// N A V I G A T O R S
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,


tabBarStyle: {
          backgroundColor: `${color.white}`,
          padding: 4,
          paddingBottom: 3,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },

        tabBarLabelStyle: {
          fontSize: sizes.tabLabel,
	        paddingBottom:1
        },
        tabBarActiveTintColor: color.secondry,
        tabBarInactiveTintColor: color.light_gray,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIconStyle: {color: '#000'},
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              color={focused ? color.secondry : color.light_gray}
	
              size={Iconsizes.iconSize5_5}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About us"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({focused}) => (
            <Icon
              name="book-open"
              color={focused ? color.secondry : color.light_gray}

              size={Iconsizes.iconSize5_5}              
            />
          ),
        }}
      />
      <Tab.Screen
        name="Deductions Record"
        component={Deductions}
        options={{
          tabBarLabel: 'Deductions',
          tabBarIcon: ({focused}) => (
            <Icon
              name="docs"
              color={focused ? color.secondry : color.light_gray}

              size={Iconsizes.iconSize5_5}            />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarLabel: 'Services',
          tabBarIcon: ({focused}) => (
            <Icon
              name="grid"
              color={focused ? color.secondry : color.light_gray}

              size={Iconsizes.iconSize5_5}            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact us"
        component={Contact}
        options={{
          tabBarLabel: 'Contact us',
          tabBarIcon: ({focused}) => (
            <Icon
              name="envelope-letter"
              color={focused ? color.secondry : color.light_gray}

              size={Iconsizes.iconSize5_5}            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="AddForm" component={AddForm} />
      <Stack.Screen name="ViewDeduction" component={ViewDeduction} />
      <Stack.Screen name="HelpScreen" component={HelpScreen} />
    </Stack.Navigator>
  );
}
