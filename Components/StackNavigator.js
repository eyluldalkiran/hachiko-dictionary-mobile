import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Pages/LoginPage';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}} // Bu satır, başlık çubuğunu gizler
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
