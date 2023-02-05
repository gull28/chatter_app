import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LandingPage} from './imports/client/LandingPage/LandingPage';
import {LoginScreen} from './imports/client/LoginScreen/LoginScreen';
import {RegisterScreen} from './imports/client/RegisterScreen/RegisterScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerBackVisible: false}}>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerLeft: () => null,
          }}
        />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
