import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../components/screens/Home';
import Taxi from '../../components/screens/Taxi';
import Tren from '../../components/screens/Tren';

const {Navigator, Screen} = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Navigator>
      <Screen name="Bici" component={HomeScreen} />
      <Screen name="Taxi" component={Taxi} />
      <Screen name="Tren" component={Tren} />
    </Navigator>
  );
};

export default HomeNavigator;
