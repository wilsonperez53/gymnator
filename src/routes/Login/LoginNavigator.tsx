import React from 'react';
import {View, Text, Button} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../../components/screens/Auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {Navigator, Screen} = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Log In"
        component={AuthScreen}
        options={{
          headerStyle: {
            backgroundColor: '#1A66BF',
          },
          headerTintColor: '#fff',
          headerLeft: () => <Icon size={30} color="#fff" name="chevron-left" />,
        }}
      />
    </Navigator>
  );
};

export default LoginNavigator;