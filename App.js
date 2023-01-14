import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoadingScreen from './imports/client/pages/LoadingScreen/LoadingScreen';
import LoginScreen from './imports/client/LoginScreen/LoginScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{title: 'Hello LoadingScreen'}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: 'Hello LoginScreen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
