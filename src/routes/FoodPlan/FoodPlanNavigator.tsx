import React from 'react';
import {View, Text, Button} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import FoodPlanScreen from '../../components/screens/FoodPlan';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {Navigator, Screen} = createStackNavigator();

const FoodPlanNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Your Food Plan"
        component={FoodPlanScreen}
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

export default FoodPlanNavigator;