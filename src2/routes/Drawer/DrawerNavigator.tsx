import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from '../Home';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home Navigator" component={HomeNavigator} />
    </Navigator>
  );
};

export default DrawerNavigator;
