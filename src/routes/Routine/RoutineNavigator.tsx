import React from 'react';
import {View, Text, Button} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import RoutineScreen from '../../components/screens/Routine';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {Navigator, Screen} = createStackNavigator();

const RoutineNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Your Routine"
        component={RoutineScreen}
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

export default RoutineNavigator;