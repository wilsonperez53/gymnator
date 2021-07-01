import React from 'react';
import {View, Text, Button} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../../components/screens/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {Navigator, Screen} = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Your Profile"
        component={ProfileScreen}
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

export default ProfileNavigator;