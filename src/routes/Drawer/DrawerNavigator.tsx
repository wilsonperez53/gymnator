import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from '../Home';
import RoutineNavigator from '../Routine';
import FoodPlanNavigator from '../FoodPlan';
import ProfileNavigator from '../Profile';
import LoginNavigator from '../Login';
import SigninNavigator from '../Signin';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Navigator initialRouteName="Login">
      <Screen name="Home" component={HomeNavigator} />
      <Screen name="Rutinas" component={RoutineNavigator} />
      <Screen name="Nutricion" component={FoodPlanNavigator} />
      <Screen name="Perfil" component={ProfileNavigator} />
      <Screen name="Login" component={LoginNavigator} />
      <Screen name="Signin" component={SigninNavigator} />
    </Navigator>
  );
};

export default DrawerNavigator;
