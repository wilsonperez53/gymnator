import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../components/screens/Home';
import Routine from '../../components/screens/Routine';
import Profile from '../../components/screens/Profile';

const {Navigator, Screen} = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Rutina" component={Routine} />
      <Screen name="Perfil" component={Profile} />
    </Navigator>
  );
};

export default HomeNavigator;
