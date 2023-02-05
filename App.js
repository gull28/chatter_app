import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LandingPage} from './imports/client/LandingPage/LandingPage';
import {LoginScreen} from './imports/client/LoginScreen/LoginScreen';
import {RegisterScreen} from './imports/client/RegisterScreen/RegisterScreen';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
};
export default App;
