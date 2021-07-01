import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../components/screens/Home';
import FoodPlanScreen from '../../components/screens/FoodPlan';
import ProfileScreen from '../../components/screens/Profile';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Navigator initialRouteName="">
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Food Plan" component={FoodPlanScreen} />
      <Screen name="Profile" component={ProfileScreen} />
    </Navigator>
  );
};

export default DrawerNavigator;
