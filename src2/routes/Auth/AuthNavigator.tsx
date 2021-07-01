import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Auth from '../../components/screens/Auth';
import DrawerNavigator from '../Drawer/DrawerNavigator';
import Login from '../../components/screens/Login';
import Signin from '../../components/screens/Signin';
import {DRAWER_ROUTE} from '../../constants/routes';

const {Navigator, Screen} = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Auth" component={Auth} />
      <Screen name="Login" component={Login} />
      <Screen name="Signin" component={Signin} />
      <Screen name={DRAWER_ROUTE} component={DrawerNavigator} />
    </Navigator>
  );
};

export default AuthNavigator;
